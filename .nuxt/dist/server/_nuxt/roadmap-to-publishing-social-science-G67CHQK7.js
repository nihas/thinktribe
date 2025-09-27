import { computed, unref, createVNode, resolveDynamicComponent, h, useSSRContext } from "vue";
import { ssrRenderStyle, ssrRenderAttr, ssrInterpolate, ssrRenderList, ssrRenderVNode } from "vue/server-renderer";
import { u as useRuntimeConfig } from "../server.mjs";
import "ofetch";
import "#internal/nuxt/paths";
import "/Users/nihasnizar/Downloads/ONE/thinktribe/node_modules/hookable/dist/index.mjs";
import "/Users/nihasnizar/Downloads/ONE/thinktribe/node_modules/unctx/dist/index.mjs";
import "/Users/nihasnizar/Downloads/ONE/thinktribe/node_modules/h3/dist/index.mjs";
import "vue-router";
import "/Users/nihasnizar/Downloads/ONE/thinktribe/node_modules/radix3/dist/index.mjs";
import "/Users/nihasnizar/Downloads/ONE/thinktribe/node_modules/defu/dist/defu.mjs";
import "/Users/nihasnizar/Downloads/ONE/thinktribe/node_modules/ufo/dist/index.mjs";
const title = "The Roadmap to Publishing in Social Science";
const description = "Are you a postgraduate student or recent graduate in the social sciences looking to elevate your academic profile? Your dissertation holds invaluable research—it’s time to move it from a university archive to a respected academic journal. \n\nThis crucial webinar, hosted by THINK TRIBE, is designed to demystify the complex process of academic publishing for first-time authors. We will provide you with a clear, step-by-step roadmap to successfully converting your lengthy thesis into a concise, peer-review-ready article.";
const _sfc_main = {
  __name: "roadmap-to-publishing-social-science",
  __ssrInlineRender: true,
  setup(__props) {
    const baseURL = useRuntimeConfig().app.baseURL;
    const bannerImage = `${baseURL}/images/webinar-1234.jpg`;
    const speaker = {
      image: `${baseURL}/images/nikhil.png`,
      name: "Nikhil Zebu",
      designation: "Psychologist & Research Scholar",
      socialLinks: [
        // { name: 'twitter', url: 'https://twitter.com/janedoe' },
        { name: "linkedin", url: "https://linkedin.com/in/janedoe" },
        // { name: 'github', url: 'https://github.com/janedoe' },
        { name: "instagram", url: "https://instagram.com/janedoe" }
      ]
    };
    const formattedDescription = computed(
      () => description.replace(/\n/g, "<br>")
    );
    const webinarDetails = {
      date: "September 27, 2025",
      time: "7:00 PM (IST)",
      // duration: '2 hours',
      platform: "Online (Google Meet)"
    };
    const TwitterIcon = {
      render() {
        return h("svg", { fill: "currentColor", viewBox: "0 0 24 24", class: "w-5 h-5" }, [
          h("path", { d: "M8 19c11 0 17-9 17-17v-1A12.3 12.3 0 0027 1a11.7 11.7 0 01-3.4.9 6 6 0 002.6-3.3 11.4 11.4 0 01-3.7 1.4 6 6 0 00-10.3 5.5 17 17 0 01-12-6 6 6 0 001.9 8 6 6 0 01-2.7-.7v.1a6 6 0 004.8 5.9 6 6 0 01-2.6.1 6 6 0 005.6 4.2A12 12 0 014 22a17 17 0 009 3" })
        ]);
      }
    };
    const LinkedInIcon = {
      render() {
        return h("svg", {
          fill: "currentColor",
          width: "24",
          height: "24",
          viewBox: "0 0 382 382",
          xmlns: "http://www.w3.org/2000/svg",
          class: "w-5 h-5",
          version: "1.1",
          xmlSpace: "preserve"
        }, [
          h("path", {
            style: "fill:#0077B7;",
            d: "M347.445,0H34.555C15.471,0,0,15.471,0,34.555v312.889C0,366.529,15.471,382,34.555,382h312.889 C366.529,382,382,366.529,382,347.444V34.555C382,15.471,366.529,0,347.445,0z M118.207,329.844c0,5.554-4.502,10.056-10.056,10.056 H65.345c-5.554,0-10.056-4.502-10.056-10.056V150.403c0-5.554,4.502-10.056,10.056-10.056h42.806 c5.554,0,10.056,4.502,10.056,10.056V329.844z M86.748,123.432c-22.459,0-40.666-18.207-40.666-40.666S64.289,42.1,86.748,42.1 s40.666,18.207,40.666,40.666S109.208,123.432,86.748,123.432z M341.91,330.654c0,5.106-4.14,9.246-9.246,9.246H286.73 c-5.106,0-9.246-4.14-9.246-9.246v-84.168c0-12.556,3.683-55.021-32.813-55.021c-28.309,0-34.051,29.066-35.204,42.11v97.079 c0,5.106-4.139,9.246-9.246,9.246h-44.426c-5.106,0-9.246-4.14-9.246-9.246V149.593c0-5.106,4.14-9.246,9.246-9.246h44.426 c5.106,0,9.246,4.14,9.246,9.246v15.655c10.497-15.753,26.097-27.912,59.312-27.912c73.552,0,73.131,68.716,73.131,106.472 L341.91,330.654L341.91,330.654z"
          })
        ]);
      }
    };
    const InstagramIcon = {
      render() {
        return h("svg", {
          fill: "currentColor",
          width: "24",
          height: "24",
          viewBox: "0 0 32 32",
          xmlns: "http://www.w3.org/2000/svg",
          class: "w-5 h-5"
        }, [
          h("path", {
            d: "M20.445 5h-8.891A6.559 6.559 0 0 0 5 11.554v8.891A6.559 6.559 0 0 0 11.554 27h8.891a6.56 6.56 0 0 0 6.554-6.555v-8.891A6.557 6.557 0 0 0 20.445 5zm4.342 15.445a4.343 4.343 0 0 1-4.342 4.342h-8.891a4.341 4.341 0 0 1-4.341-4.342v-8.891a4.34 4.34 0 0 1 4.341-4.341h8.891a4.342 4.342 0 0 1 4.341 4.341l.001 8.891z"
          }),
          h("path", {
            d: "M16 10.312c-3.138 0-5.688 2.551-5.688 5.688s2.551 5.688 5.688 5.688 5.688-2.551 5.688-5.688-2.55-5.688-5.688-5.688zm0 9.163a3.475 3.475 0 1 1-.001-6.95 3.475 3.475 0 0 1 .001 6.95zM21.7 8.991a1.363 1.363 0 1 1-1.364 1.364c0-.752.51-1.364 1.364-1.364z"
          })
        ]);
      }
    };
    const GithubIcon = {
      template: `<svg fill="currentColor" viewBox="0 0 24 24"><path d="M12 2a10 10 0 00-3.16 19.5c.5.1.68-.22.68-.48v-1.7c-2.77.6-3.35-1.33-3.35-1.33a2.64 2.64 0 00-1.1-1.44c-.9-.62.07-.6.07-.6a2.1 2.1 0 011.52 1 2.15 2.15 0 002.93.84 2.13 2.13 0 01.63-1.34c-2.22-.25-4.55-1.11-4.55-4.95a3.87 3.87 0 011-2.7 3.6 3.6 0 01.1-2.67s.84-.27 2.75 1a9.5 9.5 0 015 0c1.9-1.3 2.74-1 2.74-1a3.6 3.6 0 01.1 2.67 3.87 3.87 0 011 2.7c0 3.86-2.34 4.7-4.57 4.95a2.4 2.4 0 01.7 1.87v2.78c0 .26.18.58.7.48A10 10 0 0012 2z"/></svg>`
    };
    function getSocialIcon(name) {
      switch (name.toLowerCase()) {
        case "instagram":
          return InstagramIcon;
        case "twitter":
          return TwitterIcon;
        case "linkedin":
          return LinkedInIcon;
        case "github":
          return GithubIcon;
        default:
          return null;
      }
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[--><section class="relative h-48 md:h-96 bg-cover bg-center flex items-center justify-center" style="${ssrRenderStyle(`background-image: url('${unref(baseURL)}/images/banner.png')`)}"><div class="absolute inset-0 bg-black/60"></div><div class="relative text-center text-white px-4"><h1 class="text-2xl md:text-4xl font-bold">Webinar Details</h1><nav class="mt-2 text-xs md:text-sm"><ul class="flex items-center justify-center gap-1 md:gap-2 flex-wrap"><li><a href="/" class="hover:underline">Home</a> &gt; <span class="text-gray-400">Webinar Details</span></li></ul></nav></div></section><section class="max-w-full bg-[#F9F7F1] mx-auto p-8"><div class="flex flex-col md:flex-row md:space-x-8"><div class="md:w-[70%]"><img${ssrRenderAttr("src", bannerImage)} alt="Webinar Banner" class="w-full h-auto rounded-lg object-cover"><h1 class="mt-8 text-3xl font-bold text-gray-900">${ssrInterpolate(title)}</h1><p class="mt-4 text-gray-700">${formattedDescription.value ?? ""}</p><div class="mt-8 border rounded-lg p-6 shadow-sm"><h2 class="text-2xl font-semibold mb-4">Meet the Speaker</h2><div class="flex items-center space-x-4"><img${ssrRenderAttr("src", speaker.image)} alt="Speaker Image" class="w-20 h-20 rounded-full object-cover"><div><p class="text-lg font-medium">${ssrInterpolate(speaker.name)}</p><p class="text-sm text-gray-500">${ssrInterpolate(speaker.designation)}</p><div class="mt-2 flex space-x-3"><!--[-->`);
      ssrRenderList(speaker.socialLinks, (link) => {
        _push(`<a${ssrRenderAttr("href", link.url)} target="_blank" rel="noopener noreferrer" class="text-blue-500 hover:text-blue-700">`);
        ssrRenderVNode(_push, createVNode(resolveDynamicComponent(getSocialIcon(link.name)), { class: "w-5 h-5" }, null), _parent);
        _push(`</a>`);
      });
      _push(`<!--]--></div></div></div></div></div><div class="md:w-[30%] mt-6 md:mt-0 flex flex-col gap-6"><div class="bg-gray-50 rounded-lg p-6 shadow-md flex flex-col"><h2 class="text-2xl font-semibold mb-4">Information</h2><div class="w-16 h-1.5 bg-[#fd620e] rounded mb-4"></div><ul class="space-y-4 divide-y divide-gray-200"><li class="pt-0"><strong>Date:</strong> ${ssrInterpolate(webinarDetails.date)}</li><li class="pt-4"><strong>Time:</strong> ${ssrInterpolate(webinarDetails.time)}</li><li class="pt-4"><strong>Platform:</strong> ${ssrInterpolate(webinarDetails.platform)}</li></ul></div><div class="bg-gray-50 rounded-lg p-6 shadow-md flex flex-col"><h2 class="text-2xl font-semibold mb-4">Registration</h2><div class="w-16 h-1.5 bg-[#fd620e] rounded mb-4"></div><div class="td-schedule-details-form-quantity inline-block mt-4 mb-4"><span class="block text-[18px] text-black leading-none"><span class="font-normal">UG &amp; PG Students:</span><span class="font-bold"> ₹100.00</span></span><span class="block text-[18px] text-black leading-none mt-2"><span class="font-normal">Others:</span><span class="font-bold"> ₹200.00</span></span><span class="block text-sm text-gray-500 mt-2">Paid Webinar</span></div><div class="mt-2"><button type="submit" class="w-full bg-[#fd620e] text-white rounded-[6px] px-[30px] py-[21px] shadow-[0_4px_10px_rgba(169,33,119,0.4)] hover:bg-pink-800 transition duration-200"> Register Now </button></div></div></div></div></section><!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/webinar/roadmap-to-publishing-social-science.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=roadmap-to-publishing-social-science-G67CHQK7.js.map
