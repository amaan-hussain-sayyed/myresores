const config = require('config');
let destination = require("../model/destinationModel");
let systemURL = config.get('systemURL');
let routePermission = config.get('Permission');

async function render(res,renderPath,data){
    let destinationData = await destination.menuData().catch((err) => {
        return { error: err }
    })
    let menuData={}
    if (!destinationData || (destinationData && destinationData.error)) {
        menuData["destination"] = []
        menuData["popularDestination"] = []
    }else {
        menuData["destination"] = destinationData.data
        menuData["popularDestination"] = destinationData.popularDes
    }


    renderPath = '../'+renderPath;
    let renderUI = {generateTable,generateForm};
    let LOCALE = {script:[],scriptLink:[],cssLink:[]};
    let SYSTEM = {
        menuData:menuData,
        url:systemURL,permission: routePermission,
        imagePath:'/images/',cssPath:'/css/',jsPath:'/js/'
    }
    res.render('templates/main',{renderPath,data,renderUI:renderUI,LOCALE,SYSTEM});
}

function generateTable(data,details){
    html = `<table class="table table-bordered table-hover">`
    html+= `<thead><tr>`;
    for(let column in data[0]){
        if(details.column[column]){
            html+= `<th style="white-space: nowrap;"> ${details.column[column]} </th>`
        }
    }
    html+= `<th>Action</th>`;
    html+= `</tr></thead>`;
    html+= `<tbody>`;
    if(data && typeof(data) == 'object' && data.length > 0){

        for(let row of data){
            html+= `<tr>`;
            //for filling columns data
            for(let column in row){
                if(details.column[column]){
                    html+= `<td>${row[column]}</td>`
                }
            }
            //for filling columns data end
    
            //for creation action button like add update delete
            if(details.action && details.action.length > 0){
                html+= `<td>`;
                for(let action of details.action){
                    let url = (action.url && row.id) ? `${action.url}${row.id}` : `#`;
                    let classAtt = (action.classAtt) ? `${action.classAtt}`:`btn btn-default`;
                    let title = (action.title) ? `${action.title}`:`#`;
                    html+= `<a href="${url}" class="${classAtt}">${title}</a> `;
                }
                html+= `</td>`;
            }
            //for creation action button like add update delete end
            html+= `</tr>`;
        }
    } else {
        html+= `<tr><td colspan="100">Data Not Found</td></tr>`
    }
    html+= `</tbody> </table>`;
    return html;
}

function generateForm(data,details){
    let html = `<form action="${details.url}" method="${details.method}">`;
    html+=`<div class=row>`;
    for(let row in details.inputs){     
        let field = details.inputs[row];
        let fieldName = field.name ? field.name: row;
        let fieldLabel = field.label ? field.label: fieldName;
        let fieldType = field.type ? field.type: `text`;
        let fieldIsRequired = field.isRequired ? 'required': '';
        let fieldPlaceHolder = field.placeholder ? field.placeholder: `Enter Text`;
        let fieldDivClass = field.divClass ? field.divClass: `col-md-6 mb-3`;
        let fieldValue = data[row] ? data[row]: ``;
        if(fieldType == 'textarea'){
            let fieldRows = (field.rows) ? field.rows : 4;
            html+= `<div class="${fieldDivClass}">
                <label for="${fieldName}" class="form-label">${fieldLabel}</label>
                <textarea class="form-control" rows=${fieldRows} id="${fieldName}" placeholder="${fieldPlaceHolder}" name="${fieldName}" ${fieldIsRequired}>${fieldValue}</textarea>
            </div>`
        } else if(fieldType == 'select'){
            let selectOptions = (field.selectOptions) ? field.selectOptions :[];
            html+= `<div class="${fieldDivClass}">
                <label for="${fieldName}" class="form-label">${fieldLabel}</label>
                <select class="form-control" id="${fieldName}" name="${fieldName}" ${fieldIsRequired}>`;
            for(let selectOp of selectOptions){
                html+=`<option value="${selectOp.value}">${selectOp.value}</option>`
            }
            html+= `</select></div>`
        } else{
            html+= `<div class="${fieldDivClass}">
                <label for="${fieldName}" class="form-label">${fieldLabel}</label>
                <input type="${fieldType}" class="form-control" id="${fieldName}" placeholder="${fieldPlaceHolder}" name="${fieldName}"  value="${fieldValue}" ${fieldIsRequired}>
            </div>`
        }
    }
    html+=`<div class="col-md-12 text-center"><button type="submit" class="btn btn-primary">Submit</button></div></form></div>`;
    return html
}

module.exports = {
    render,
}