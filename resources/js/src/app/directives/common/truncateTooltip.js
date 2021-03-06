import { debounce } from "../../helper/debounce";
import Vue from "vue";

Vue.directive("truncate-tooltip",
    {
        inserted(element)
        {
            const tooltip = function()
            {
                const outer = element.offsetWidth;
                const inner = element.children[0].scrollWidth;

                if (inner > outer)
                {
                    element.children[0].dataset.originalTitle = element.children[0].text;
                }
                else
                {
                    element.children[0].dataset.originalTitle = "";
                }
            };

            document.addEventListener("DOMContentLoaded", event =>
            {
                tooltip();
            });

            window.addEventListener("resize", debounce( event =>
            {
                tooltip();
            }, 500));
        }
    });
