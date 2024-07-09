import { tv } from "tailwind-variants";

export const title = tv({
  base: " md:inline font-bold ",
  variants: {
    color: {
      violet: "from-[#FF1CF7] to-[#ba62f4]",
      yellow: "from-[#FF705B] to-[#fcb967]",
      blue: "from-[#5EA2EF] to-[#0072F5]",
      cyan: "from-[#00b7fa] to-[#21e5ff]",
      green: "from-[#6FEE8D] to-[#11da68]",
      pink: "from-[#FF72E1] to-[#fa3368]",
      foreground: "dark:from-[#ffffff] dark:to-[#747474]",

    },
    size: {
      sm: "text-lg  lg:text-2xl",
      md: "text-4xl  md:text-2xl ",
      lg: "text-6xl md:text-4xl ",
    },
    textShadow: {
      sm: "drop-shadow-sm lg:drop-shadow",
      md: "drop-shadow lg:drop-shadow-md",
      lg: "drop-shadow-lg lg:drop-shadow-xl",
    }
    ,
    fullWidth: {
      true: "w-full block",
    },
  },
  defaultVariants: {
    size: "md",
  },
  
  compoundVariants: [
    {
      color: [
        "violet",
        "yellow",
        "blue",
        "cyan",
        "green",
        "pink",
        "foreground",
      ],

      class: "bg-clip-text text-transparent bg-gradient-to-b",
    },
  ],
});




export const buttonStyles = tv({
  base: "inline-flex items-center justify-center gap-1.5 font-medium rounded-lg",
  variants: {
    color: {
      primary: "bg-primary-600 text-white hover:bg-primary-700",
      secondary: "bg-secondary-600 text-white hover:bg-secondary-700",
      success: "bg-success-600 text-white hover:bg-success-700",
      warning: "bg-warning-600 text-white hover:bg-warning-700",
      danger: "bg-danger-600 text-white hover:bg-danger-700",
      info: "bg-info-600 text-white hover:bg-info-700",
      link: "text-primary-600 hover:text-primary-700",
      gray: "bg-gray-600 text-white hover:bg-gray-700",
      violet: "bg-violet-600 text-white hover:bg-violet-700",
      yellow: "bg-yellow-600 text-white hover:bg-yellow-700",
      blue: "bg-blue-600 text-white hover:bg-blue-700",
      cyan: "bg-cyan-600 text-white hover:bg-cyan-700",
      green: "bg-green-600 text-white hover:bg-green-700",
      pink: "bg-pink-600 text-white hover:bg-pink-700",
    },
    size: {
      sm: "px-4 py-2 text-sm  lg:text-base lg:px-5 lg:py-3",
      md: "px-5 py-2.5 text-base  lg:text-xl lg:px-6 lg:py-3.5",
      lg: "px-6 py-3 text-lg  lg:text-2xl lg:px-7 lg:py-4",  
    },
    radius: {
      full: "rounded-full",
      sm: "rounded-sm",
      md: "rounded-md",
      lg: "rounded-lg",
    },
    shadow: {
      true: "shadow",
    },    

  },
  defaultVariants: {
    color: "primary",
    size: "md",
    radius: "md",
    shadow: false,
  },
});


export const subtitle = tv({
  base: "w-full md:w-1/2 my-2 text-lg lg:text-xl text-default-600 block max-w-full",
  variants: {
    size: {
      sm: "text-sm  lg:text-base",
      md: "text-base  lg:text-md",
      lg: "text-md  lg:text-lg",
    },
    fullWidth: {
      true: "!w-full",
    },
  },
  defaultVariants: {
    fullWidth: true,
  },
});

