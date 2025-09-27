import { _ as __nuxt_component_0 } from "./nuxt-link-BnWM4J4L.js";
import { mergeProps, unref, withCtx, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderStyle, ssrRenderComponent } from "vue/server-renderer";
import { u as useRuntimeConfig } from "../server.mjs";
import "/Users/nihasnizar/Downloads/ONE/thinktribe/node_modules/ufo/dist/index.mjs";
import "ofetch";
import "#internal/nuxt/paths";
import "/Users/nihasnizar/Downloads/ONE/thinktribe/node_modules/hookable/dist/index.mjs";
import "/Users/nihasnizar/Downloads/ONE/thinktribe/node_modules/unctx/dist/index.mjs";
import "/Users/nihasnizar/Downloads/ONE/thinktribe/node_modules/h3/dist/index.mjs";
import "vue-router";
import "/Users/nihasnizar/Downloads/ONE/thinktribe/node_modules/radix3/dist/index.mjs";
import "/Users/nihasnizar/Downloads/ONE/thinktribe/node_modules/defu/dist/defu.mjs";
const _sfc_main = {
  __name: "about-us",
  __ssrInlineRender: true,
  setup(__props) {
    const baseURL = useRuntimeConfig().app.baseURL;
    const openWhatsApp = () => {
      const phoneNumber = "917025016081";
      const message = `Hello!`;
      const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
      (void 0).open(url, "_blank");
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "font-sans text-gray-800" }, _attrs))}><section class="relative h-48 md:h-96 bg-cover bg-center flex items-center justify-center" style="${ssrRenderStyle(`background-image: url('${unref(baseURL)}/images/banner.png')`)}"><div class="absolute inset-0 bg-black/60"></div><div class="relative text-center text-white px-4"><h1 class="text-2xl md:text-4xl font-bold">About Us</h1><nav class="mt-2 text-xs md:text-sm"><ul class="flex items-center justify-center gap-1 md:gap-2 flex-wrap"><li><a href="/" class="hover:underline">Home</a> &gt; <span class="text-gray-400">About Us</span></li></ul></nav></div></section><section class="bg-pink-50 py-16 px-6 text-center"><div class="max-w-4xl mx-auto"><h1 class="text-4xl md:text-5xl font-bold text-[#fd620e] mb-4">Your Tribe for Mental Wellness</h1><p class="text-lg text-gray-700"> Welcome to ThinkTribe. We know that navigating mental health can feel isolating. That’s why we built a supportive, inclusive platform to connect you with the tools, knowledge, and experts you need. </p></div></section><section class="bg-white py-16 px-6"><div class="max-w-4xl mx-auto"><h2 class="text-3xl font-semibold text-gray-900 mb-4">Who We Are</h2><p class="text-gray-700 leading-relaxed text-lg"> ThinkTribe is a platform dedicated to transforming how you approach mental wellness. We believe that robust, accessible, and high-quality mental health support should be available to everyone, everywhere. </p></div></section><section class="bg-gray-50 py-16 px-6"><div class="max-w-4xl mx-auto"><h2 class="text-3xl font-semibold text-gray-900 mb-4">Our Mission</h2><p class="text-gray-700 leading-relaxed text-lg"> At ThinkTribe, we are driven by a singular mission: to make mental health support more accessible, inclusive, and engaging for all. <br><br> We&#39;ve created a supportive online ecosystem where individuals and communities can truly learn, heal, and thrive together. We firmly believe that mental health is a necessity, not a luxury, and we are committed to making this a shared journey of growth and understanding. </p></div></section><section class="bg-white py-16 px-6"><div class="max-w-4xl mx-auto"><h2 class="text-3xl font-semibold text-gray-900 mb-6">What We Offer</h2><p class="text-gray-700 text-lg mb-6"> ThinkTribe brings together the best of psychology-based learning into one seamless experience: </p><ul class="list-disc space-y-4 pl-6 text-gray-700 text-base"><li><strong>Expert-Led Therapy:</strong> Connect with licensed professionals for personalized support. </li><li><strong>Webinars &amp; Learning:</strong> Engage with cutting-edge, psychology-based educational content. </li><li><strong>Insightful Podcasts:</strong> Listen to curated discussions designed to expand your mind and perspective. </li></ul></div></section><section class="bg-pink-100 py-16 px-6 text-center"><div class="max-w-3xl mx-auto"><h3 class="text-2xl font-semibold text-gray-800 mb-4">Join the Tribe</h3><p class="text-gray-700 text-lg mb-6"> We’re here to dismantle the barriers to care and make your journey of healing and growth a shared experience. Let’s learn, heal, and thrive—together. </p>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        onClick: openWhatsApp,
        class: "inline-block bg-pink-700 text-white px-6 py-3 rounded-lg shadow hover:bg-pink-800 transition"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Contact Us `);
          } else {
            return [
              createTextVNode(" Contact Us ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></section></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/about-us.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=about-us-BE9p1Px6.js.map
