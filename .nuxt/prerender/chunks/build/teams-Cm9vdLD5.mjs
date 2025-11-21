import { mergeProps, useSSRContext } from 'file:///Users/nihasnizar/Downloads/ONE/ghpage/thinktribe/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderList, ssrRenderComponent, ssrRenderAttr, ssrInterpolate } from 'file:///Users/nihasnizar/Downloads/ONE/ghpage/thinktribe/node_modules/vue/server-renderer/index.mjs';
import { _ as _export_sfc } from './server.mjs';
import 'file:///Users/nihasnizar/Downloads/ONE/ghpage/thinktribe/node_modules/ofetch/dist/node.mjs';
import '../_/renderer.mjs';
import 'file:///Users/nihasnizar/Downloads/ONE/ghpage/thinktribe/node_modules/vue-bundle-renderer/dist/runtime.mjs';
import 'file:///Users/nihasnizar/Downloads/ONE/ghpage/thinktribe/node_modules/h3/dist/index.mjs';
import 'file:///Users/nihasnizar/Downloads/ONE/ghpage/thinktribe/node_modules/ufo/dist/index.mjs';
import '../nitro/nitro.mjs';
import 'file:///Users/nihasnizar/Downloads/ONE/ghpage/thinktribe/node_modules/destr/dist/index.mjs';
import 'file:///Users/nihasnizar/Downloads/ONE/ghpage/thinktribe/node_modules/hookable/dist/index.mjs';
import 'file:///Users/nihasnizar/Downloads/ONE/ghpage/thinktribe/node_modules/node-mock-http/dist/index.mjs';
import 'file:///Users/nihasnizar/Downloads/ONE/ghpage/thinktribe/node_modules/unstorage/dist/index.mjs';
import 'file:///Users/nihasnizar/Downloads/ONE/ghpage/thinktribe/node_modules/unstorage/drivers/fs.mjs';
import 'file:///Users/nihasnizar/Downloads/ONE/ghpage/thinktribe/node_modules/unstorage/drivers/fs-lite.mjs';
import 'file:///Users/nihasnizar/Downloads/ONE/ghpage/thinktribe/node_modules/unstorage/drivers/lru-cache.mjs';
import 'file:///Users/nihasnizar/Downloads/ONE/ghpage/thinktribe/node_modules/ohash/dist/index.mjs';
import 'file:///Users/nihasnizar/Downloads/ONE/ghpage/thinktribe/node_modules/klona/dist/index.mjs';
import 'file:///Users/nihasnizar/Downloads/ONE/ghpage/thinktribe/node_modules/defu/dist/defu.mjs';
import 'file:///Users/nihasnizar/Downloads/ONE/ghpage/thinktribe/node_modules/scule/dist/index.mjs';
import 'file:///Users/nihasnizar/Downloads/ONE/ghpage/thinktribe/node_modules/unctx/dist/index.mjs';
import 'file:///Users/nihasnizar/Downloads/ONE/ghpage/thinktribe/node_modules/radix3/dist/index.mjs';
import 'node:fs';
import 'node:url';
import 'file:///Users/nihasnizar/Downloads/ONE/ghpage/thinktribe/node_modules/pathe/dist/index.mjs';
import 'file:///Users/nihasnizar/Downloads/ONE/ghpage/thinktribe/node_modules/unhead/dist/server.mjs';
import 'file:///Users/nihasnizar/Downloads/ONE/ghpage/thinktribe/node_modules/devalue/index.js';
import 'file:///Users/nihasnizar/Downloads/ONE/ghpage/thinktribe/node_modules/unhead/dist/utils.mjs';
import 'file:///Users/nihasnizar/Downloads/ONE/ghpage/thinktribe/node_modules/unhead/dist/plugins.mjs';
import 'file:///Users/nihasnizar/Downloads/ONE/ghpage/thinktribe/node_modules/vue-router/dist/vue-router.node.mjs';

const _sfc_main$1 = {
  __name: "TeamCard",
  __ssrInlineRender: true,
  props: {
    member: Object
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["p-4 rounded-3xl hover:bg-[#f0f0f0] transition group text-center flex flex-col items-center", __props.member.highlight ? "bg-[#D3EFE6]" : ""]
      }, _attrs))}><div class="w-40 h-40 rounded-full overflow-hidden mb-4"><img${ssrRenderAttr("src", __props.member.image)}${ssrRenderAttr("alt", __props.member.name)} class="object-cover w-full h-full"></div><h3 class="font-serif text-lg text-[#2E4B42]">${ssrInterpolate(__props.member.name)}</h3><p class="text-sm italic">${ssrInterpolate(__props.member.pronouns)}</p><p class="text-sm text-[#2E4B42]">${ssrInterpolate(__props.member.title)}</p><div class="flex flex-wrap justify-center gap-1 mt-2"><!--[-->`);
      ssrRenderList(__props.member.locations, (loc) => {
        _push(`<span class="text-xs px-2 py-0.5 bg-gray-200 rounded-full text-[#2E4B42]">${ssrInterpolate(loc)}</span>`);
      });
      _push(`<!--]--></div><a href="#" class="mt-4 text-sm inline-flex items-center px-4 py-1.5 bg-white text-[#2E4B42] border border-[#2E4B42] rounded-full hover:bg-[#f0f0f0] transition"> See profile <span class="ml-2 bg-[#2E4B42] text-white w-5 h-5 inline-flex items-center justify-center rounded-full"> \u2192 </span></a></div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/TeamCard.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "teams",
  __ssrInlineRender: true,
  setup(__props) {
    const teamMembers = [
      {
        name: "Dr. David H. Capstick",
        pronouns: "he/him",
        title: "Director, Clinical Psychologist",
        locations: ["Carlton", "Geelong", "St Kilda"],
        image: "/images/haaii.webp"
      },
      {
        name: "Steph Sier",
        pronouns: "she/her",
        title: "Senior Therapist | MHASW",
        locations: ["Carlton"],
        image: "/images/haaii.webp"
      },
      {
        name: "Rene Pirrotta",
        pronouns: "she/her",
        title: "Senior Psychologist",
        locations: ["St Kilda"],
        image: "/images/haaii.webp"
      },
      {
        name: "Edwina Vejayaratnam",
        pronouns: "she/they",
        title: "Clinical Psychologist",
        locations: ["Carlton"],
        image: "/images/haaii.webp",
        highlight: true
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_TeamCard = _sfc_main$1;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "bg-[#fdfbf7] min-h-screen py-16 px-6 md:px-12" }, _attrs))} data-v-9269189c><div class="pt-16 max-w-6xl mx-auto mb-12" data-v-9269189c><h1 class="text-5xl md:text-6xl font-serif text-[#2E4B42] mb-4" data-v-9269189c>Meet the team</h1><p class="text-lg text-[#2E4B42]" data-v-9269189c>Our experienced clinicians</p></div><div class="max-w-6xl mx-auto mb-10 space-y-4" data-v-9269189c><div class="flex flex-wrap gap-2 text-sm text-[#2E4B42]" data-v-9269189c><strong class="mr-2" data-v-9269189c>Filter by clinic location:</strong><button class="btn-filter" data-v-9269189c>St Kilda</button><button class="btn-filter" data-v-9269189c>Carlton</button><button class="btn-filter" data-v-9269189c>Geelong</button><button class="btn-filter" data-v-9269189c>Colac</button></div><div class="flex flex-wrap gap-2 text-sm text-[#2E4B42]" data-v-9269189c><strong class="mr-2" data-v-9269189c>Filter by practice areas:</strong><button class="btn-filter" data-v-9269189c>Relationship counselling</button><button class="btn-filter" data-v-9269189c>Assessments</button><button class="btn-filter" data-v-9269189c>Adults</button><button class="btn-filter" data-v-9269189c>Adolescents</button><button class="btn-filter" data-v-9269189c>Children</button><a href="#" class="ml-auto underline text-xs" data-v-9269189c>clear all filters</a></div></div><div class="max-w-6xl mx-auto grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4" data-v-9269189c><!--[-->`);
      ssrRenderList(teamMembers, (member) => {
        _push(ssrRenderComponent(_component_TeamCard, {
          key: member.name,
          member
        }, null, _parent));
      });
      _push(`<!--]--></div></section>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/teams.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const teams = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-9269189c"]]);

export { teams as default };
//# sourceMappingURL=teams-Cm9vdLD5.mjs.map
