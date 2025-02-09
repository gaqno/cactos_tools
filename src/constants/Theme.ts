import { PrimeReactPTOptions, APIOptions } from "primereact/api";
import { classNames } from "primereact/utils";
import { twMerge } from "tailwind-merge";
import Tailwind from "primereact/passthrough/tailwind";

const Theme: APIOptions = {
  unstyled: true,
  ptOptions: {
    mergeSections: true,
    mergeProps: true,
    classNameMergeFunction: twMerge,
  },
  pt: {
    ...Tailwind,
    button: {
      root: ({ props, context }: any) => ({
        className: classNames(
          "items-center cursor-pointer inline-flex overflow-hidden relative select-none text-center align-bottom",
          "transition duration-200 ease-in-out",
          "focus:outline-none focus:outline-offset-0",
          {
            "text-white dark:text-gray-900 bg-primary dark:bg-blue-400 border border-primary dark:border-blue-400 hover:bg-blue-600 dark:hover:bg-primary hover:border-blue-600 dark:hover:border-primary focus:shadow-[0_0_0_2px_rgba(255,255,255,1),0_0_0_4px_rgba(157,193,251,1),0_1px_2px_0_rgba(0,0,0,1)] dark:focus:shadow-[0_0_0_2px_rgba(28,33,39,1),0_0_0_4px_rgba(147,197,253,0.7),0_1px_2px_0_rgba(0,0,0,0)]":
              !props.link &&
              props.severity === null &&
              !props.text &&
              !props.outlined &&
              !props.plain,
            "text-blue-600 bg-transparent border-transparent focus:shadow-[0_0_0_2px_rgba(255,255,255,1),0_0_0_4px_rgba(157,193,251,1),0_1px_2px_0_rgba(0,0,0,1)] dark:focus:shadow-[0_0_0_2px_rgba(28,33,39,1),0_0_0_4px_rgba(147,197,253,0.7),0_1px_2px_0_rgba(0,0,0,0)]":
              props.link,
          },
          {
            "focus:shadow-[0_0_0_2px_rgba(255,255,255,1),0_0_0_4px_rgba(176,185,198,1),0_1px_2px_0_rgba(0,0,0,1)] dark:focus:shadow-[0_0_0_2px_rgba(28,33,39,1),0_0_0_4px_rgba(203,213,225,0.7),0_1px_2px_0_rgba(0,0,0,0)]":
              props.severity === "secondary",
            "focus:shadow-[0_0_0_2px_rgba(255,255,255,1),0_0_0_4px_rgba(136,234,172,1),0_1px_2px_0_rgba(0,0,0,1)] dark:focus:shadow-[0_0_0_2px_rgba(28,33,39,1),0_0_0_4px_rgba(134,239,172,0.7),0_1px_2px_0_rgba(0,0,0,0)]":
              props.severity === "success",
            "focus:shadow-[0_0_0_2px_rgba(255,255,255,1),0_0_0_4px_rgba(157,193,251,1),0_1px_2px_0_rgba(0,0,0,1)] dark:focus:shadow-[0_0_0_2px_rgba(28,33,39,1),0_0_0_4px_rgba(147,197,253,0.7),0_1px_2px_0_rgba(0,0,0,0)]":
              props.severity === "info",
            "focus:shadow-[0_0_0_2px_rgba(255,255,255,1),0_0_0_4px_rgba(250,207,133,1),0_1px_2px_0_rgba(0,0,0,1)] dark:focus:shadow-[0_0_0_2px_rgba(28,33,39,1),0_0_0_4px_rgba(252,211,77,0.7),0_1px_2px_0_rgba(0,0,0,0)]":
              props.severity === "warning",
            "focus:shadow-[0_0_0_2px_rgba(255,255,255,1),0_0_0_4px_rgba(212,170,251,1),0_1px_2px_0_rgba(0,0,0,1)] dark:focus:shadow-[0_0_0_2px_rgba(28,33,39,1),0_0_0_4px_rgba(216,180,254,0.7),0_1px_2px_0_rgba(0,0,0,0)]":
              props.severity === "help",
            "focus:shadow-[0_0_0_2px_rgba(255,255,255,1),0_0_0_4px_rgba(247,162,162,1),0_1px_2px_0_rgba(0,0,0,1)] dark:focus:shadow-[0_0_0_2px_rgba(28,33,39,1),0_0_0_4px_rgba(252,165,165,0.7),0_1px_2px_0_rgba(0,0,0,0)]":
              props.severity === "danger",
          },
          {
            "text-white dark:text-gray-900 bg-gray-500 dark:bg-gray-400 border border-gray-500 dark:border-gray-400 hover:bg-gray-600 dark:hover:bg-gray-500 hover:border-gray-600 dark:hover:border-gray-500":
              props.severity === "secondary" &&
              !props.text &&
              !props.outlined &&
              !props.plain,
            "text-white dark:text-gray-900 bg-green-500 dark:bg-green-400 border border-green-500 dark:border-green-400 hover:bg-green-600 dark:hover:bg-green-500 hover:border-green-600 dark:hover:border-green-500":
              props.severity === "success" &&
              !props.text &&
              !props.outlined &&
              !props.plain,
            "text-white dark:text-gray-900 dark:bg-blue-400 bg-primary dark:bg-blue-400 border border-primary dark:border-blue-400 hover:bg-blue-600 hover:border-blue-600 dark:hover:bg-primary dark:hover:border-primary":
              props.severity === "info" &&
              !props.text &&
              !props.outlined &&
              !props.plain,
            "text-white dark:text-gray-900 bg-orange-500 dark:bg-orange-400 border border-orange-500 dark:border-orange-400 hover:bg-orange-600 dark:hover:bg-orange-500 hover:border-orange-600 dark:hover:border-orange-500":
              props.severity === "warning" &&
              !props.text &&
              !props.outlined &&
              !props.plain,
            "text-white dark:text-gray-900 bg-purple-500 dark:bg-purple-400 border border-purple-500 dark:border-purple-400 hover:bg-purple-600 dark:hover:bg-purple-500 hover:border-purple-600 dark:hover:border-purple-500":
              props.severity === "help" &&
              !props.text &&
              !props.outlined &&
              !props.plain,
            "text-white dark:text-gray-900 bg-red-500 dark:bg-red-400 border border-red-500 dark:border-red-400 hover:bg-red-600 dark:hover:bg-red-500 hover:border-red-600 dark:hover:border-red-500":
              props.severity === "danger" &&
              !props.text &&
              !props.outlined &&
              !props.plain,
          },
          { "shadow-lg": props.raised },
          { "rounded-md": !props.rounded, "rounded-full": props.rounded },
          {
            "bg-transparent border-transparent": props.text && !props.plain,
            "text-primary dark:text-blue-400 hover:bg-blue-300/20":
              props.text &&
              (props.severity === null || props.severity === "info") &&
              !props.plain,
            "text-gray-500 dark:text-gray-400 hover:bg-gray-300/20":
              props.text && props.severity === "secondary" && !props.plain,
            "text-green-500 dark:text-green-400 hover:bg-green-300/20":
              props.text && props.severity === "success" && !props.plain,
            "text-orange-500 dark:text-orange-400 hover:bg-orange-300/20":
              props.text && props.severity === "warning" && !props.plain,
            "text-purple-500 dark:text-purple-400 hover:bg-purple-300/20":
              props.text && props.severity === "help" && !props.plain,
            "text-red-500 dark:text-red-400 hover:bg-red-300/20":
              props.text && props.severity === "danger" && !props.plain,
          },
          { "shadow-lg": props.raised && props.text },
          {
            "text-gray-500 hover:bg-gray-300/20": props.plain && props.text,
            "text-gray-500 border border-gray-500 hover:bg-gray-300/20":
              props.plain && props.outlined,
            "text-white bg-gray-500 border border-gray-500 hover:bg-gray-600 hover:border-gray-600":
              props.plain && !props.outlined && !props.text,
          },
          {
            "bg-transparent border": props.outlined && !props.plain,
            "text-primary dark:text-blue-400 border border-primary dark:border-blue-400 hover:bg-blue-300/20":
              props.outlined &&
              (props.severity === null || props.severity === "info") &&
              !props.plain,
            "text-gray-500 dark:text-gray-400 border border-gray-500 dark:border-gray-400 hover:bg-gray-300/20":
              props.outlined && props.severity === "secondary" && !props.plain,
            "text-green-500 dark:text-green-400 border border-green-500 dark:border-green-400 hover:bg-green-300/20":
              props.outlined && props.severity === "success" && !props.plain,
            "text-orange-500 dark:text-orange-400 border border-orange-500 dark:border-orange-400 hover:bg-orange-300/20":
              props.outlined && props.severity === "warning" && !props.plain,
            "text-purple-500 dark:text-purple-400 border border-purple-500 dark:border-purple-400 hover:bg-purple-300/20":
              props.outlined && props.severity === "help" && !props.plain,
            "text-red-500 dark:text-red-400 border border-red-500 dark:border-red-400 hover:bg-red-300/20":
              props.outlined && props.severity === "danger" && !props.plain,
          },
          {
            "px-4 py-3 text-base": props.size === null,
            "text-xs py-2 px-3": props.size === "small",
            "text-xl py-3 px-4": props.size === "large",
          },
          {
            "flex-column": props.iconPos == "top" || props.iconPos == "bottom",
          },
          { "opacity-60 pointer-events-none cursor-default": context.disabled }
        ),
      }),
      label: ({ props }: any) => ({
        className: classNames(
          "flex-1",
          "duration-200",
          "font-bold",
          {
            "hover:underline": props.link,
          },
          { "invisible w-0": props.label == null }
        ),
      }),
      icon: ({ props }: any) => ({
        className: classNames("mx-0", {
          "mr-2": props.iconPos == "left" && props.label != null,
          "ml-2 order-1": props.iconPos == "right" && props.label != null,
          "mb-2": props.iconPos == "top" && props.label != null,
          "mt-2 order-2": props.iconPos == "bottom" && props.label != null,
        }),
      }),
      loadingIcon: ({ props }: any) => ({
        className: classNames("mx-0", {
          "mr-2":
            props.loading && props.iconPos == "left" && props.label != null,
          "ml-2 order-1":
            props.loading && props.iconPos == "right" && props.label != null,
          "mb-2":
            props.loading && props.iconPos == "top" && props.label != null,
          "mt-2 order-2":
            props.loading && props.iconPos == "bottom" && props.label != null,
        }),
      }),
      badge: ({ props }: any) => ({
        className: classNames({
          "ml-2 w-4 h-4 leading-none flex items-center justify-center":
            props.badge,
        }),
      }),
    },
    breadcrumb: {
      ...Tailwind.breadcrumb,
      root: () => ({
        className: classNames(
          "flex flex-row bg-white dark:bg-gray-900 rounded-lg py-2 px-4"
        ),
      }),
    },
    card: {
      ...Tailwind.card,
      root: () => ({
        className: classNames(
          "w-full border border-gray-100 dark:border-gray-800 rounded-lg",
          "bg-white dark:bg-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800",
          "cursor-pointer hover:shadow-lg transition-shadow duration-200 hover:opacity-90 transition-opacity",
          "active:shadow-lg active:bg-gray-200 dark:active:bg-gray-800"
        ),
      }),
      content: () => ({
        className: classNames(
          "flex gap-2 flex-row items-center justify-between"
        ),
      }),
    },
    dialog: {
      content: {
        className: classNames("bg-transparent"),
      },
    },
    datatable: {
      root: () => ({
        className: classNames(
          "border border-gray-200 dark:border-gray-800 rounded-lg"
        ),
      }),
      header: {
        container: {
          className: classNames(
            "bg-gray-100 dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800"
          ),
        },
        cell: {
          className: classNames(
            "text-gray-700 dark:text-white/80 font-medium",
            "px-6 py-3",
            "dark:border-gray-800"
          ),
        },
      },
      body: {
        cell: {
          className: classNames(
            "text-gray-700 dark:text-white/80",
            "px-6 py-4 whitespace-nowrap",
            "dark:border-gray-800"
          ),
        },
      },
      paginator: {
        container: {
          className: classNames(
            "flex items-center justify-between",
            "bg-gray-100 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800",
            "px-6 py-3"
          ),
        },
        pages: {
          className: classNames("flex items-center gap-2"),
        },
        dropdown: {
          className: classNames("flex items-center gap-2"),
        },
        currentPageReport: {
          className: classNames("text-gray-700 dark:text-white/80"),
        },
        button: {
          className: classNames(
            "font-sans text-white bg-black dark:bg-primary border border-gray-300 dark:border-blue-900/40",
            "transition-colors duration-200 appearance-none rounded-lg",
            "hover:border-primary focus:outline-none focus:outline-offset-0",
            "focus:shadow-[0_0_0_0.2rem_rgba(191,219,254,1)] dark:focus:shadow-[0_0_0_0.2rem_rgba(147,197,253,0.5)]",
            "opacity-60 cursor-pointer",
            "text-lg px-4 py-4",
            "p-3 text-base"
          ),
        },
      },
    },
    dropdown: {
      ...Tailwind.dropdown,
      item: {
        className: classNames(
          "text-gray-700 dark:text-white/80",
          "px-4 py-2",
          "dark:border-gray-800"
        ),
      }
    },
    fieldset: {
      ...Tailwind.fieldset,
      content: () => ({
        className: classNames("p-4 h-full"),
      }),
      toggleableContent: () => ({
        className: classNames("flex flex-col justify-between h-full"),
      }),
    },
    treeselect: {
      ...Tailwind.treeselect,
      root: () => ({
        className: classNames(
          "bg-white text-sm dark:border-blue-900/40 dark:bg-gray-900 dark:text-white",
          "flex flex-row max-w-sm basis-0 items-center justify-center rounded-lg border border-gray-300",
          "transition-colors ease-in"
        ),
      }),
    },
    tree: {
      root: () => ({
        className: classNames(
          "border border-gray-200 dark:border-gray-800 rounded-lg p-2"
        ),
      }),
    },
    tabview: {
      root: () => ({
        className: classNames("bg-[#F6F6F6] dark:bg-gray-900 w/full"),
      }),
      body: {
        container: {
          className: classNames("p-4"),
        },
      },
      panelContainer: {
        className: classNames(
          "rounded-lg h-auto",
          "bg-white dark:bg-gray-900",
          "shadow-none"
        ),
      },
      nav: {
        className: classNames(
          "flex items-center",
          "bg-gray-100 dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800"
        ),
      },
    },
  } as PrimeReactPTOptions,
};

export default Theme;
