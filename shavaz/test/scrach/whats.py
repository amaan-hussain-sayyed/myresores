# import cv2

# def detect_faces(image_path):
#     # Load the image from file
#     image = cv2.imread(image_path)
    
#     # Load the pre-trained Haarcascades face detector
#     face_cascade = cv2.CascadeClassifier(cv2.data.haarcascades + 'haarcascade_frontalface_default.xml')
    
#     # Convert the image to grayscale
#     gray_image = cv2.cvtColor(image, cv2.COLOR_BGR2GRAY)
    
#     # Detect faces in the image
#     faces = face_cascade.detectMultiScale(gray_image, scaleFactor=1.3, minNeighbors=5)
    
#     # Draw rectangles around the faces
#     for (x, y, w, h) in faces:
#         cv2.rectangle(image, (x, y), (x+w, y+h), (255, 0, 0), 2)
    
#     # Display the result
#     cv2.imshow('Face Detection', image)
#     cv2.waitKey(0)
#     cv2.destroyAllWindows()

# # Example usage
# image_path = 'ArticleImage.14143.png'
# detect_faces(image_path)

# import cv2

# def detect_faces_internal_camera():
#     # Load the pre-trained Haarcascades face detector
#     face_cascade = cv2.CascadeClassifier(cv2.data.haarcascades + 'haarcascade_frontalface_default.xml')

#     # Open a connection to the internal camera (you may need to adjust the camera index)
#     # Use cv2.VideoCapture(1) or cv2.VideoCapture(2) if the default (0) doesn't work
#     cap = cv2.VideoCapture(0)

#     while True:
#         # Capture frame-by-frame
#         ret, frame = cap.read()

#         # Convert the frame to grayscale
#         gray_frame = cv2.cvtColor(frame, cv2.COLOR_BGR2GRAY)

#         # Detect faces in the frame
#         faces = face_cascade.detectMultiScale(gray_frame, scaleFactor=1.3, minNeighbors=5)

#         # Draw rectangles around the faces
#         for (x, y, w, h) in faces:
#             cv2.rectangle(frame, (x, y), (x+w, y+h), (255, 0, 0), 2)

#         # Display the frame
#         cv2.imshow('Face Detection', frame)

#         # Break the loop if 'q' key is pressed
#         if cv2.waitKey(1) & 0xFF == ord('q'):
#             break

#     # Release the camera and close the window
#     cap.release()
#     cv2.destroyAllWindows()

# # Call the function to start face detection from the internal camera
# detect_faces_internal_camera()

import cv2
import numpy as np

def detect_age_gender():
    # Load the pre-trained Haarcascades face detector
    face_cascade = cv2.CascadeClassifier(cv2.data.haarcascades + 'haarcascade_frontalface_default.xml')

    # Load the pre-trained age and gender detection model
    age_gender_net = cv2.dnn.readNetFromCaffe(
        'deploy_age_gender.prototxt',
        'age_gender.caffemodel'
    )

    # Open a connection to the internal camera (you may need to adjust the camera index)
    cap = cv2.VideoCapture(0)

    while True:
        # Capture frame-by-frame
        ret, frame = cap.read()

        # Convert the frame to grayscale
        gray_frame = cv2.cvtColor(frame, cv2.COLOR_BGR2GRAY)

        # Detect faces in the frame
        faces = face_cascade.detectMultiScale(gray_frame, scaleFactor=1.3, minNeighbors=5)

        for (x, y, w, h) in faces:
            # Extract the face ROI
            face_roi = frame[y:y+h, x:x+w]

            # Preprocess the face for age and gender prediction
            blob = cv2.dnn.blobFromImage(
                face_roi, scalefactor=1.0, size=(227, 227),
                mean=(78.4263377603, 87.7689143744, 114.895847746),
                swapRB=False, crop=False
            )

            # Set the blob as input to the age and gender model
            age_gender_net.setInput(blob)

            # Perform forward pass and get predictions
            predictions = age_gender_net.forward()

            # Extract age and gender predictions
            age = predictions[0][0][0][0]
            gender = "Male" if predictions[1][0][0][0] > 0.5 else "Female"

            # Draw rectangle and label on the face
            cv2.rectangle(frame, (x, y), (x+w, y+h), (255, 0, 0), 2)
            label = f"Age: {int(age)} Gender: {gender}"
            cv2.putText(frame, label, (x, y-10), cv2.FONT_HERSHEY_SIMPLEX, 0.8, (255, 0, 0), 2)

        # Display the frame
        cv2.imshow('Age and Gender Detection', frame)

        # Break the loop if 'q' key is pressed
        if cv2.waitKey(1) & 0xFF == ord('q'):
            break

    # Release the camera and close the window
    cap.release()
    cv2.destroyAllWindows()

# Call the function to start age and gender detection from the internal camera
detect_age_gender()
