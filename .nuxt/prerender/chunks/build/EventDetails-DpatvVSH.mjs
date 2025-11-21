import { mergeProps, createVNode, resolveDynamicComponent, useSSRContext } from 'file:///Users/nihasnizar/Downloads/ONE/ghpage/thinktribe/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderAttr, ssrInterpolate, ssrRenderList, ssrRenderVNode } from 'file:///Users/nihasnizar/Downloads/ONE/ghpage/thinktribe/node_modules/vue/server-renderer/index.mjs';

const bannerImage = "/images/webinar-banner.jpg";
const title = "Mastering Nuxt 3 and TailwindCSS for Modern Web Development";
const description = "Join us for an in-depth webinar where we explore building stunning websites with Nuxt 3 and TailwindCSS. Perfect for developers of all levels.";
const _sfc_main = {
  __name: "EventDetails",
  __ssrInlineRender: true,
  setup(__props) {
    const speaker = {
      image: "/images/speaker.jpg",
      name: "Jane Doe",
      designation: "Senior Frontend Engineer",
      socialLinks: [
        { name: "twitter", url: "https://twitter.com/janedoe" },
        { name: "linkedin", url: "https://linkedin.com/in/janedoe" },
        { name: "github", url: "https://github.com/janedoe" }
      ]
    };
    const webinarDetails = {
      date: "October 15, 2025",
      time: "3:00 PM - 5:00 PM (GMT)",
      duration: "2 hours",
      platform: "Zoom",
      registrationLink: "https://example.com/register"
    };
    const TwitterIcon = {
      template: `<svg fill="currentColor" viewBox="0 0 24 24"><path d="M8 19c11 0 17-9 17-17v-1A12.3 12.3 0 0027 1a11.7 11.7 0 01-3.4.9 6 6 0 002.6-3.3 11.4 11.4 0 01-3.7 1.4 6 6 0 00-10.3 5.5 17 17 0 01-12-6 6 6 0 001.9 8 6 6 0 01-2.7-.7v.1a6 6 0 004.8 5.9 6 6 0 01-2.6.1 6 6 0 005.6 4.2A12 12 0 014 22a17 17 0 009 3"/></svg>`
    };
    const LinkedInIcon = {
      template: `<svg fill="currentColor" viewBox="0 0 24 24"><path d="M4.98 3.5a2.5 2.5 0 11.01 5 2.5 2.5 0 01-.01-5zM4 8h4v12H4V8zm7 0h4v2.1c.6-1 2.1-2 4.3-2 4.6 0 5.4 3 5.4 6.9V20h-4v-6c0-1.4-.1-3.2-2-3.2-2 0-2.3 1.6-2.3 3v6.2h-4V8z"/></svg>`
    };
    const GithubIcon = {
      template: `<svg fill="currentColor" viewBox="0 0 24 24"><path d="M12 2a10 10 0 00-3.16 19.5c.5.1.68-.22.68-.48v-1.7c-2.77.6-3.35-1.33-3.35-1.33a2.64 2.64 0 00-1.1-1.44c-.9-.62.07-.6.07-.6a2.1 2.1 0 011.52 1 2.15 2.15 0 002.93.84 2.13 2.13 0 01.63-1.34c-2.22-.25-4.55-1.11-4.55-4.95a3.87 3.87 0 011-2.7 3.6 3.6 0 01.1-2.67s.84-.27 2.75 1a9.5 9.5 0 015 0c1.9-1.3 2.74-1 2.74-1a3.6 3.6 0 01.1 2.67 3.87 3.87 0 011 2.7c0 3.86-2.34 4.7-4.57 4.95a2.4 2.4 0 01.7 1.87v2.78c0 .26.18.58.7.48A10 10 0 0012 2z"/></svg>`
    };
    function getSocialIcon(name) {
      switch (name.toLowerCase()) {
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
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "max-w-6xl mx-auto p-6" }, _attrs))}><div class="flex flex-col md:flex-row md:space-x-8"><div class="md:w-[70%]"><img${ssrRenderAttr("src", bannerImage)} alt="Webinar Banner" class="w-full h-auto rounded-lg object-cover"><h1 class="mt-4 text-3xl font-bold text-gray-900">${ssrInterpolate(title)}</h1><p class="mt-2 text-gray-700">${ssrInterpolate(description)}</p><div class="mt-8"><h2 class="text-2xl font-semibold mb-4">Meet the Speaker</h2><div class="flex items-center space-x-4"><img${ssrRenderAttr("src", speaker.image)} alt="Speaker Image" class="w-20 h-20 rounded-full object-cover"><div><p class="text-lg font-medium">${ssrInterpolate(speaker.name)}</p><p class="text-sm text-gray-500">${ssrInterpolate(speaker.designation)}</p><div class="mt-2 flex space-x-3"><!--[-->`);
      ssrRenderList(speaker.socialLinks, (link) => {
        _push(`<a${ssrRenderAttr("href", link.url)} target="_blank" rel="noopener noreferrer" class="text-blue-500 hover:text-blue-700">`);
        ssrRenderVNode(_push, createVNode(resolveDynamicComponent(getSocialIcon(link.name)), { class: "w-5 h-5" }, null), _parent);
        _push(`</a>`);
      });
      _push(`<!--]--></div></div></div></div></div><div class="md:w-[30%] mt-6 md:mt-0 bg-gray-50 rounded-lg p-6 shadow-md flex flex-col justify-center"><h2 class="text-xl font-semibold mb-4">Webinar Details</h2><p><strong>Date:</strong> ${ssrInterpolate(webinarDetails.date)}</p><p><strong>Time:</strong> ${ssrInterpolate(webinarDetails.time)}</p><p><strong>Duration:</strong> ${ssrInterpolate(webinarDetails.duration)}</p><p><strong>Platform:</strong> ${ssrInterpolate(webinarDetails.platform)}</p><a${ssrRenderAttr("href", webinarDetails.registrationLink)} target="_blank" rel="noopener noreferrer" class="mt-6 inline-block bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 text-center"> Register Now </a></div></div></section>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/webinar/EventDetails.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=EventDetails-DpatvVSH.mjs.map
