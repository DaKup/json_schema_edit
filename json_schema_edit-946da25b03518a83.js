let T=1,N=null,O=`undefined`,X=`boolean`,a3=2180,Y=`string`,R=0,Z=`Object`,P=`utf-8`,W=`number`,a0=4,U=`function`,$=16,L=Array,Q=Error,_=FinalizationRegistry,V=Int32Array,a2=Promise,a1=Reflect,S=Uint8Array,M=undefined;var F=(async(a,b)=>{if(typeof Response===U&&a instanceof Response){if(typeof WebAssembly.instantiateStreaming===U){try{return await WebAssembly.instantiateStreaming(a,b)}catch(b){if(a.headers.get(`Content-Type`)!=`application/wasm`){console.warn(`\`WebAssembly.instantiateStreaming\` failed because your server does not serve wasm with \`application/wasm\` MIME type. Falling back to \`WebAssembly.instantiate\` which is slower. Original error:\\n`,b)}else{throw b}}};const c=await a.arrayBuffer();return await WebAssembly.instantiate(c,b)}else{const c=await WebAssembly.instantiate(a,b);if(c instanceof WebAssembly.Instance){return {instance:c,module:a}}else{return c}}});var u=(a=>{const b=typeof a;if(b==W||b==X||a==N){return `${a}`};if(b==Y){return `"${a}"`};if(b==`symbol`){const b=a.description;if(b==N){return `Symbol`}else{return `Symbol(${b})`}};if(b==U){const b=a.name;if(typeof b==Y&&b.length>R){return `Function(${b})`}else{return `Function`}};if(L.isArray(a)){const b=a.length;let c=`[`;if(b>R){c+=u(a[R])};for(let d=T;d<b;d++){c+=`, `+ u(a[d])};c+=`]`;return c};const c=/\[object ([^\]]+)\]/.exec(toString.call(a));let d;if(c.length>T){d=c[T]}else{return toString.call(a)};if(d==Z){try{return `Object(`+ JSON.stringify(a)+ `)`}catch(a){return Z}};if(a instanceof Q){return `${a.name}: ${a.message}\n${a.stack}`};return d});var H=((a,b)=>{});var B=((b,c)=>{a.wasm_bindgen__convert__closures__invoke0_mut__hc263208ddc555e43(b,c)});var x=((b,c)=>{a.wasm_bindgen__convert__closures__invoke0_mut__h76913eaac4988f64(b,c)});var k=(a=>{if(d===b.length)b.push(b.length+ T);const c=d;d=b[c];b[c]=a;return c});var f=(a=>{const b=c(a);e(a);return b});var A=((b,c,d)=>{a.wasm_bindgen__convert__closures__invoke1_mut__h6652dc7a91b7653a(b,c,k(d))});var K=(async(b)=>{if(a!==M)return a;if(typeof b===O){b=new URL(`json_schema_edit-946da25b03518a83_bg.wasm`,import.meta.url)};const c=G();if(typeof b===Y||typeof Request===U&&b instanceof Request||typeof URL===U&&b instanceof URL){b=fetch(b)};H(c);const {instance:d,module:e}=await F(await b,c);return I(d,e)});function D(b,c){try{return b.apply(this,c)}catch(b){a.__wbindgen_exn_store(k(b))}}var E=((b,c,d,e)=>{a.wasm_bindgen__convert__closures__invoke2_mut__he87bc1412dfac71e(b,c,k(d),k(e))});var C=((b,c,d)=>{a._dyn_core__ops__function__FnMut__A____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__he0867fe2b94b5ac4(b,c,k(d))});var r=(()=>{if(q===N||q.byteLength===R){q=new V(a.memory.buffer)};return q});var p=(a=>a===M||a===N);var c=(a=>b[a]);var J=(b=>{if(a!==M)return a;const c=G();H(c);if(!(b instanceof WebAssembly.Module)){b=new WebAssembly.Module(b)};const d=new WebAssembly.Instance(b,c);return I(d,b)});var y=((b,c)=>{a._dyn_core__ops__function__FnMut_____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__h13dc1af8cfd06a82(b,c)});var I=((b,c)=>{a=b.exports;K.__wbindgen_wasm_module=c;s=N;q=N;h=N;a.__wbindgen_start();return a});var t=(()=>{if(s===N||s.byteLength===R){s=new Float64Array(a.memory.buffer)};return s});var G=(()=>{const b={};b.wbg={};b.wbg.__wbindgen_object_drop_ref=(a=>{f(a)});b.wbg.__wbindgen_string_new=((a,b)=>{const c=j(a,b);return k(c)});b.wbg.__wbindgen_cb_drop=(a=>{const b=f(a).original;if(b.cnt--==T){b.a=R;return !0};const c=!1;return c});b.wbg.__wbindgen_object_clone_ref=(a=>{const b=c(a);return k(b)});b.wbg.__wbindgen_string_get=((b,d)=>{const e=c(d);const f=typeof e===Y?e:M;var g=p(f)?R:o(f,a.__wbindgen_malloc,a.__wbindgen_realloc);var h=l;r()[b/a0+ T]=h;r()[b/a0+ R]=g});b.wbg.__wbg_warn_4221b1eeb4c424c2=((a,b)=>{console.warn(j(a,b))});b.wbg.__wbg_info_71a5de3030bb4c02=((a,b)=>{console.info(j(a,b))});b.wbg.__wbg_debug_8582c7d8fc50b6cf=((a,b)=>{console.debug(j(a,b))});b.wbg.__wbg_trace_cbd26c32e6945675=((a,b)=>{console.trace(j(a,b))});b.wbg.__wbg_error_ca2474234fef2329=((b,c)=>{let d;let e;try{d=b;e=c;console.error(j(b,c))}finally{a.__wbindgen_free(d,e,T)}});b.wbg.__wbg_new_ad8b60ed55d95a64=(()=>{const a=new Q();return k(a)});b.wbg.__wbg_stack_1c80e3b436be887a=((b,d)=>{const e=c(d).stack;const f=o(e,a.__wbindgen_malloc,a.__wbindgen_realloc);const g=l;r()[b/a0+ T]=g;r()[b/a0+ R]=f});b.wbg.__wbindgen_number_get=((a,b)=>{const d=c(b);const e=typeof d===W?d:M;t()[a/8+ T]=p(e)?R:e;r()[a/a0+ R]=!p(e)});b.wbg.__wbg_queueMicrotask_f61ee94ee663068b=(a=>{queueMicrotask(c(a))});b.wbg.__wbg_queueMicrotask_f82fc5d1e8f816ae=(a=>{const b=c(a).queueMicrotask;return k(b)});b.wbg.__wbindgen_is_function=(a=>{const b=typeof c(a)===U;return b});b.wbg.__wbg_performance_eeefc685c9bc38b4=(a=>{const b=c(a).performance;return k(b)});b.wbg.__wbindgen_is_undefined=(a=>{const b=c(a)===M;return b});b.wbg.__wbg_now_e0d8ec93dd25766a=(a=>{const b=c(a).now();return b});b.wbg.__wbindgen_boolean_get=(a=>{const b=c(a);const d=typeof b===X?(b?T:R):2;return d});b.wbg.__wbg_instanceof_Window_cee7a886d55e7df5=(a=>{let b;try{b=c(a) instanceof Window}catch(a){b=!1}const d=b;return d});b.wbg.__wbg_document_eb7fd66bde3ee213=(a=>{const b=c(a).document;return p(b)?R:k(b)});b.wbg.__wbg_location_b17760ac7977a47a=(a=>{const b=c(a).location;return k(b)});b.wbg.__wbg_navigator_b1003b77e05fcee9=(a=>{const b=c(a).navigator;return k(b)});b.wbg.__wbg_innerHeight_a9719febb72ddaf3=function(){return D((a=>{const b=c(a).innerHeight;return k(b)}),arguments)};b.wbg.__wbg_devicePixelRatio_3ced5021c4480dd9=(a=>{const b=c(a).devicePixelRatio;return b});b.wbg.__wbg_localStorage_3d538af21ea07fcc=function(){return D((a=>{const b=c(a).localStorage;return p(b)?R:k(b)}),arguments)};b.wbg.__wbg_performance_4ca1873776fdb3d2=(a=>{const b=c(a).performance;return p(b)?R:k(b)});b.wbg.__wbg_matchMedia_d9cdff718d3e526e=function(){return D(((a,b,d)=>{const e=c(a).matchMedia(j(b,d));return p(e)?R:k(e)}),arguments)};b.wbg.__wbg_open_8db78e14935e215b=function(){return D(((a,b,d,e,f)=>{const g=c(a).open(j(b,d),j(e,f));return p(g)?R:k(g)}),arguments)};b.wbg.__wbg_requestAnimationFrame_fdbeaff9e8f3f77d=function(){return D(((a,b)=>{const d=c(a).requestAnimationFrame(c(b));return d}),arguments)};b.wbg.__wbg_clearInterval_0216ca540cb1ad00=((a,b)=>{c(a).clearInterval(b)});b.wbg.__wbg_fetch_33c84c2bf739f490=((a,b)=>{const d=c(a).fetch(c(b));return k(d)});b.wbg.__wbg_setTimeout_6ed7182ebad5d297=function(){return D(((a,b,d)=>{const e=c(a).setTimeout(c(b),d);return e}),arguments)};b.wbg.__wbg_instanceof_WebGl2RenderingContext_b1bbc94623ae057f=(a=>{let b;try{b=c(a) instanceof WebGL2RenderingContext}catch(a){b=!1}const d=b;return d});b.wbg.__wbg_bindVertexArray_68196ec68ffa5d9c=((a,b)=>{c(a).bindVertexArray(c(b))});b.wbg.__wbg_bufferData_325ab331c8e0735f=((a,b,d,e)=>{c(a).bufferData(b>>>R,c(d),e>>>R)});b.wbg.__wbg_createVertexArray_aa1c03bf14f520f1=(a=>{const b=c(a).createVertexArray();return p(b)?R:k(b)});b.wbg.__wbg_texImage2D_480bb656acf1c931=function(){return D(((a,b,d,e,f,g,h,i,j,k)=>{c(a).texImage2D(b>>>R,d,e,f,g,h,i>>>R,j>>>R,c(k))}),arguments)};b.wbg.__wbg_texSubImage2D_01a3d1b8ac6e4702=function(){return D(((a,b,d,e,f,g,h,i,j,k)=>{c(a).texSubImage2D(b>>>R,d,e,f,g,h,i>>>R,j>>>R,c(k))}),arguments)};b.wbg.__wbg_texSubImage2D_c96538f70e56e139=function(){return D(((a,b,d,e,f,g,h,i,j,k)=>{c(a).texSubImage2D(b>>>R,d,e,f,g,h,i>>>R,j>>>R,k)}),arguments)};b.wbg.__wbg_activeTexture_5f08f4188abc9410=((a,b)=>{c(a).activeTexture(b>>>R)});b.wbg.__wbg_attachShader_427e1d01a628e522=((a,b,d)=>{c(a).attachShader(c(b),c(d))});b.wbg.__wbg_bindBuffer_0285be79ac8a4f9f=((a,b,d)=>{c(a).bindBuffer(b>>>R,c(d))});b.wbg.__wbg_bindTexture_20fd21916229a80c=((a,b,d)=>{c(a).bindTexture(b>>>R,c(d))});b.wbg.__wbg_blendEquationSeparate_46b6aa4bdcf2d9ef=((a,b,d)=>{c(a).blendEquationSeparate(b>>>R,d>>>R)});b.wbg.__wbg_blendFuncSeparate_0490d8414b0a2e98=((a,b,d,e,f)=>{c(a).blendFuncSeparate(b>>>R,d>>>R,e>>>R,f>>>R)});b.wbg.__wbg_clear_ceb93ecc4e5d5e06=((a,b)=>{c(a).clear(b>>>R)});b.wbg.__wbg_clearColor_e4c61a3089043306=((a,b,d,e,f)=>{c(a).clearColor(b,d,e,f)});b.wbg.__wbg_colorMask_ae97e907cdf41404=((a,b,d,e,f)=>{c(a).colorMask(b!==R,d!==R,e!==R,f!==R)});b.wbg.__wbg_compileShader_2191687ded033138=((a,b)=>{c(a).compileShader(c(b))});b.wbg.__wbg_createBuffer_ee6e74ae50f1fbc8=(a=>{const b=c(a).createBuffer();return p(b)?R:k(b)});b.wbg.__wbg_createProgram_869004e7019cca34=(a=>{const b=c(a).createProgram();return p(b)?R:k(b)});b.wbg.__wbg_createShader_eceb4217c94a1056=((a,b)=>{const d=c(a).createShader(b>>>R);return p(d)?R:k(d)});b.wbg.__wbg_createTexture_084c9c8b377793c3=(a=>{const b=c(a).createTexture();return p(b)?R:k(b)});b.wbg.__wbg_deleteBuffer_c66740fb719fb9a7=((a,b)=>{c(a).deleteBuffer(c(b))});b.wbg.__wbg_deleteProgram_af78790615a2a7d7=((a,b)=>{c(a).deleteProgram(c(b))});b.wbg.__wbg_deleteShader_1d9cfbdc150762cb=((a,b)=>{c(a).deleteShader(c(b))});b.wbg.__wbg_deleteTexture_547a7269a7254d2a=((a,b)=>{c(a).deleteTexture(c(b))});b.wbg.__wbg_detachShader_83214b1314cfc677=((a,b,d)=>{c(a).detachShader(c(b),c(d))});b.wbg.__wbg_disable_3598de08841268c2=((a,b)=>{c(a).disable(b>>>R)});b.wbg.__wbg_disableVertexAttribArray_2550e62f2714837b=((a,b)=>{c(a).disableVertexAttribArray(b>>>R)});b.wbg.__wbg_drawElements_77b947be75fe30f4=((a,b,d,e,f)=>{c(a).drawElements(b>>>R,d,e>>>R,f)});b.wbg.__wbg_enable_98a8863abbaa7bd2=((a,b)=>{c(a).enable(b>>>R)});b.wbg.__wbg_enableVertexAttribArray_5f8e190ba41f4f30=((a,b)=>{c(a).enableVertexAttribArray(b>>>R)});b.wbg.__wbg_getAttribLocation_08f436d8fc4fe68d=((a,b,d,e)=>{const f=c(a).getAttribLocation(c(b),j(d,e));return f});b.wbg.__wbg_getError_4f4b3a8c71d4c39e=(a=>{const b=c(a).getError();return b});b.wbg.__wbg_getExtension_e64ba7e30e8a6eae=function(){return D(((a,b,d)=>{const e=c(a).getExtension(j(b,d));return p(e)?R:k(e)}),arguments)};b.wbg.__wbg_getParameter_4d51a40deebd7a8c=function(){return D(((a,b)=>{const d=c(a).getParameter(b>>>R);return k(d)}),arguments)};b.wbg.__wbg_getProgramInfoLog_a9fede9be1e3a6ce=((b,d,e)=>{const f=c(d).getProgramInfoLog(c(e));var g=p(f)?R:o(f,a.__wbindgen_malloc,a.__wbindgen_realloc);var h=l;r()[b/a0+ T]=h;r()[b/a0+ R]=g});b.wbg.__wbg_getProgramParameter_a13e6d88ec9e039a=((a,b,d)=>{const e=c(a).getProgramParameter(c(b),d>>>R);return k(e)});b.wbg.__wbg_getShaderInfoLog_63c64bf03382de2d=((b,d,e)=>{const f=c(d).getShaderInfoLog(c(e));var g=p(f)?R:o(f,a.__wbindgen_malloc,a.__wbindgen_realloc);var h=l;r()[b/a0+ T]=h;r()[b/a0+ R]=g});b.wbg.__wbg_getShaderParameter_0fb2d525889d5a24=((a,b,d)=>{const e=c(a).getShaderParameter(c(b),d>>>R);return k(e)});b.wbg.__wbg_getSupportedExtensions_3d93fae4cd24d995=(a=>{const b=c(a).getSupportedExtensions();return p(b)?R:k(b)});b.wbg.__wbg_getUniformLocation_009db1591e93ef17=((a,b,d,e)=>{const f=c(a).getUniformLocation(c(b),j(d,e));return p(f)?R:k(f)});b.wbg.__wbg_linkProgram_578651eb0388616a=((a,b)=>{c(a).linkProgram(c(b))});b.wbg.__wbg_pixelStorei_8848825419f61cec=((a,b,d)=>{c(a).pixelStorei(b>>>R,d)});b.wbg.__wbg_scissor_b2312f494abc5032=((a,b,d,e,f)=>{c(a).scissor(b,d,e,f)});b.wbg.__wbg_shaderSource_d241264f221df907=((a,b,d,e)=>{c(a).shaderSource(c(b),j(d,e))});b.wbg.__wbg_texParameteri_b747d8d506fcd0d2=((a,b,d,e)=>{c(a).texParameteri(b>>>R,d>>>R,e)});b.wbg.__wbg_uniform1i_3f1af04af82891ff=((a,b,d)=>{c(a).uniform1i(c(b),d)});b.wbg.__wbg_uniform2f_cf18347e12a5f103=((a,b,d,e)=>{c(a).uniform2f(c(b),d,e)});b.wbg.__wbg_useProgram_b28955d541019a7a=((a,b)=>{c(a).useProgram(c(b))});b.wbg.__wbg_vertexAttribPointer_df897e1c10d6b71b=((a,b,d,e,f,g,h)=>{c(a).vertexAttribPointer(b>>>R,d,e>>>R,f!==R,g,h)});b.wbg.__wbg_viewport_f542dcd30d88e69d=((a,b,d,e,f)=>{c(a).viewport(b,d,e,f)});b.wbg.__wbg_setid_7daec2ce740ea365=((a,b,d)=>{c(a).id=j(b,d)});b.wbg.__wbg_scrollLeft_c2f39ef7a0b36f55=(a=>{const b=c(a).scrollLeft;return b});b.wbg.__wbg_clientWidth_7a325bdb8c723d9f=(a=>{const b=c(a).clientWidth;return b});b.wbg.__wbg_clientHeight_2b2a9874084502db=(a=>{const b=c(a).clientHeight;return b});b.wbg.__wbg_setinnerHTML_95222f1a2e797983=((a,b,d)=>{c(a).innerHTML=j(b,d)});b.wbg.__wbg_getBoundingClientRect_3b6c47996a55427e=(a=>{const b=c(a).getBoundingClientRect();return k(b)});b.wbg.__wbg_remove_f7de42c5f9035d0e=(a=>{c(a).remove()});b.wbg.__wbg_body_874ccb42daaab363=(a=>{const b=c(a).body;return p(b)?R:k(b)});b.wbg.__wbg_createElement_03cf347ddad1c8c0=function(){return D(((a,b,d)=>{const e=c(a).createElement(j(b,d));return k(e)}),arguments)};b.wbg.__wbg_getElementById_77f2dfdddee12e05=((a,b,d)=>{const e=c(a).getElementById(j(b,d));return p(e)?R:k(e)});b.wbg.__wbg_instanceof_HtmlElement_99861aeb7af981c2=(a=>{let b;try{b=c(a) instanceof HTMLElement}catch(a){b=!1}const d=b;return d});b.wbg.__wbg_scrollTop_6f07539d4534a820=(a=>{const b=c(a).scrollTop;return b});b.wbg.__wbg_setinnerText_3d6b46f96d79bb66=((a,b,d)=>{c(a).innerText=j(b,d)});b.wbg.__wbg_hidden_2366c29a55a4c50a=(a=>{const b=c(a).hidden;return b});b.wbg.__wbg_sethidden_04acac3815d1ba64=((a,b)=>{c(a).hidden=b!==R});b.wbg.__wbg_style_ca229e3326b3c3fb=(a=>{const b=c(a).style;return k(b)});b.wbg.__wbg_offsetTop_0636b250f8d731f3=(a=>{const b=c(a).offsetTop;return b});b.wbg.__wbg_offsetLeft_0150ee05891dfb7e=(a=>{const b=c(a).offsetLeft;return b});b.wbg.__wbg_offsetWidth_b5af4d8ba15fa071=(a=>{const b=c(a).offsetWidth;return b});b.wbg.__wbg_setonclick_760dd24fb14d5bcb=((a,b)=>{c(a).onclick=c(b)});b.wbg.__wbg_blur_3bef2a6e3b1f9734=function(){return D((a=>{c(a).blur()}),arguments)};b.wbg.__wbg_click_7cda8c4d15577920=(a=>{c(a).click()});b.wbg.__wbg_focus_d1373017540aae66=function(){return D((a=>{c(a).focus()}),arguments)};b.wbg.__wbg_instanceof_WebGlRenderingContext_468d6182819ad4c3=(a=>{let b;try{b=c(a) instanceof WebGLRenderingContext}catch(a){b=!1}const d=b;return d});b.wbg.__wbg_bufferData_560eedbff09bce24=((a,b,d,e)=>{c(a).bufferData(b>>>R,c(d),e>>>R)});b.wbg.__wbg_texImage2D_a907a9e673209a09=function(){return D(((a,b,d,e,f,g,h,i,j,k)=>{c(a).texImage2D(b>>>R,d,e,f,g,h,i>>>R,j>>>R,c(k))}),arguments)};b.wbg.__wbg_texSubImage2D_ace8ef3e5beb9c66=function(){return D(((a,b,d,e,f,g,h,i,j,k)=>{c(a).texSubImage2D(b>>>R,d,e,f,g,h,i>>>R,j>>>R,c(k))}),arguments)};b.wbg.__wbg_activeTexture_5d70c5bfb1e18433=((a,b)=>{c(a).activeTexture(b>>>R)});b.wbg.__wbg_attachShader_877aa4ad5f81f5fb=((a,b,d)=>{c(a).attachShader(c(b),c(d))});b.wbg.__wbg_bindBuffer_8721bd9c00cbc8b8=((a,b,d)=>{c(a).bindBuffer(b>>>R,c(d))});b.wbg.__wbg_bindTexture_17a55d9204f92347=((a,b,d)=>{c(a).bindTexture(b>>>R,c(d))});b.wbg.__wbg_blendEquationSeparate_483c9bbff12702e9=((a,b,d)=>{c(a).blendEquationSeparate(b>>>R,d>>>R)});b.wbg.__wbg_blendFuncSeparate_2f3d44b3bd3604e9=((a,b,d,e,f)=>{c(a).blendFuncSeparate(b>>>R,d>>>R,e>>>R,f>>>R)});b.wbg.__wbg_clear_617b292bb8360c4a=((a,b)=>{c(a).clear(b>>>R)});b.wbg.__wbg_clearColor_6d87cdad9936f445=((a,b,d,e,f)=>{c(a).clearColor(b,d,e,f)});b.wbg.__wbg_colorMask_d8a9ecfb82a480cf=((a,b,d,e,f)=>{c(a).colorMask(b!==R,d!==R,e!==R,f!==R)});b.wbg.__wbg_compileShader_349b2f1607e1b7e9=((a,b)=>{c(a).compileShader(c(b))});b.wbg.__wbg_createBuffer_c48fee40bffd1848=(a=>{const b=c(a).createBuffer();return p(b)?R:k(b)});b.wbg.__wbg_createProgram_eb0e7dfb7c89e9b8=(a=>{const b=c(a).createProgram();return p(b)?R:k(b)});b.wbg.__wbg_createShader_6b7a22e75c6d4cc4=((a,b)=>{const d=c(a).createShader(b>>>R);return p(d)?R:k(d)});b.wbg.__wbg_createTexture_af9c1894db4f1ff4=(a=>{const b=c(a).createTexture();return p(b)?R:k(b)});b.wbg.__wbg_deleteBuffer_0788cfe1724454e7=((a,b)=>{c(a).deleteBuffer(c(b))});b.wbg.__wbg_deleteProgram_655d072ee71efb0c=((a,b)=>{c(a).deleteProgram(c(b))});b.wbg.__wbg_deleteShader_13c4ae9a9c93c31f=((a,b)=>{c(a).deleteShader(c(b))});b.wbg.__wbg_deleteTexture_38664338ad2770e7=((a,b)=>{c(a).deleteTexture(c(b))});b.wbg.__wbg_detachShader_480c7fff77236016=((a,b,d)=>{c(a).detachShader(c(b),c(d))});b.wbg.__wbg_disable_d9f43aa105b2d999=((a,b)=>{c(a).disable(b>>>R)});b.wbg.__wbg_disableVertexAttribArray_415331ebeb20bf62=((a,b)=>{c(a).disableVertexAttribArray(b>>>R)});b.wbg.__wbg_drawElements_201a313e5ea8a1c4=((a,b,d,e,f)=>{c(a).drawElements(b>>>R,d,e>>>R,f)});b.wbg.__wbg_enable_f6bb861e15562c7d=((a,b)=>{c(a).enable(b>>>R)});b.wbg.__wbg_enableVertexAttribArray_1e31054271daee48=((a,b)=>{c(a).enableVertexAttribArray(b>>>R)});b.wbg.__wbg_getAttribLocation_5394f71d757b6847=((a,b,d,e)=>{const f=c(a).getAttribLocation(c(b),j(d,e));return f});b.wbg.__wbg_getError_418a1642da6ca6b5=(a=>{const b=c(a).getError();return b});b.wbg.__wbg_getExtension_695813f4264a3da5=function(){return D(((a,b,d)=>{const e=c(a).getExtension(j(b,d));return p(e)?R:k(e)}),arguments)};b.wbg.__wbg_getParameter_d866a888cb0448b3=function(){return D(((a,b)=>{const d=c(a).getParameter(b>>>R);return k(d)}),arguments)};b.wbg.__wbg_getProgramInfoLog_5bbd3c3298d235e3=((b,d,e)=>{const f=c(d).getProgramInfoLog(c(e));var g=p(f)?R:o(f,a.__wbindgen_malloc,a.__wbindgen_realloc);var h=l;r()[b/a0+ T]=h;r()[b/a0+ R]=g});b.wbg.__wbg_getProgramParameter_9f11dae51c820ff9=((a,b,d)=>{const e=c(a).getProgramParameter(c(b),d>>>R);return k(e)});b.wbg.__wbg_getShaderInfoLog_9534d164ba660552=((b,d,e)=>{const f=c(d).getShaderInfoLog(c(e));var g=p(f)?R:o(f,a.__wbindgen_malloc,a.__wbindgen_realloc);var h=l;r()[b/a0+ T]=h;r()[b/a0+ R]=g});b.wbg.__wbg_getShaderParameter_0cfb9e3e9f43693a=((a,b,d)=>{const e=c(a).getShaderParameter(c(b),d>>>R);return k(e)});b.wbg.__wbg_getSupportedExtensions_69c26850565e0ddc=(a=>{const b=c(a).getSupportedExtensions();return p(b)?R:k(b)});b.wbg.__wbg_getUniformLocation_2890393c80bc543b=((a,b,d,e)=>{const f=c(a).getUniformLocation(c(b),j(d,e));return p(f)?R:k(f)});b.wbg.__wbg_linkProgram_5bd18d4ebd77a2ea=((a,b)=>{c(a).linkProgram(c(b))});b.wbg.__wbg_pixelStorei_98d826c8b851ed4f=((a,b,d)=>{c(a).pixelStorei(b>>>R,d)});b.wbg.__wbg_scissor_1a003e68fc69d37d=((a,b,d,e,f)=>{c(a).scissor(b,d,e,f)});b.wbg.__wbg_shaderSource_17ebc5d747730d79=((a,b,d,e)=>{c(a).shaderSource(c(b),j(d,e))});b.wbg.__wbg_texParameteri_ee2fc6b9f304c84a=((a,b,d,e)=>{c(a).texParameteri(b>>>R,d>>>R,e)});b.wbg.__wbg_uniform1i_76ac1d17923cb752=((a,b,d)=>{c(a).uniform1i(c(b),d)});b.wbg.__wbg_uniform2f_766ce5b04d89a3d8=((a,b,d,e)=>{c(a).uniform2f(c(b),d,e)});b.wbg.__wbg_useProgram_1532661e648379ca=((a,b)=>{c(a).useProgram(c(b))});b.wbg.__wbg_vertexAttribPointer_88b31f05ae55b02c=((a,b,d,e,f,g,h)=>{c(a).vertexAttribPointer(b>>>R,d,e>>>R,f!==R,g,h)});b.wbg.__wbg_viewport_037ea26b4fcd0cb2=((a,b,d,e,f)=>{c(a).viewport(b,d,e,f)});b.wbg.__wbg_items_622c348119794691=(a=>{const b=c(a).items;return k(b)});b.wbg.__wbg_files_00ec146c4eb7c254=(a=>{const b=c(a).files;return p(b)?R:k(b)});b.wbg.__wbg_getData_226778ec1544b851=function(){return D(((b,d,e,f)=>{const g=c(d).getData(j(e,f));const h=o(g,a.__wbindgen_malloc,a.__wbindgen_realloc);const i=l;r()[b/a0+ T]=i;r()[b/a0+ R]=h}),arguments)};b.wbg.__wbg_addEventListener_f984e99465a6a7f4=function(){return D(((a,b,d,e)=>{c(a).addEventListener(j(b,d),c(e))}),arguments)};b.wbg.__wbg_removeEventListener_acfc154b998d806b=function(){return D(((a,b,d,e)=>{c(a).removeEventListener(j(b,d),c(e))}),arguments)};b.wbg.__wbg_href_a5b902312c18d121=function(){return D(((b,d)=>{const e=c(d).href;const f=o(e,a.__wbindgen_malloc,a.__wbindgen_realloc);const g=l;r()[b/a0+ T]=g;r()[b/a0+ R]=f}),arguments)};b.wbg.__wbg_origin_305402044aa148ce=function(){return D(((b,d)=>{const e=c(d).origin;const f=o(e,a.__wbindgen_malloc,a.__wbindgen_realloc);const g=l;r()[b/a0+ T]=g;r()[b/a0+ R]=f}),arguments)};b.wbg.__wbg_protocol_85fb404fceb30ff2=function(){return D(((b,d)=>{const e=c(d).protocol;const f=o(e,a.__wbindgen_malloc,a.__wbindgen_realloc);const g=l;r()[b/a0+ T]=g;r()[b/a0+ R]=f}),arguments)};b.wbg.__wbg_host_3f37d9558f3919b9=function(){return D(((b,d)=>{const e=c(d).host;const f=o(e,a.__wbindgen_malloc,a.__wbindgen_realloc);const g=l;r()[b/a0+ T]=g;r()[b/a0+ R]=f}),arguments)};b.wbg.__wbg_hostname_0a8eb31c4e0261e9=function(){return D(((b,d)=>{const e=c(d).hostname;const f=o(e,a.__wbindgen_malloc,a.__wbindgen_realloc);const g=l;r()[b/a0+ T]=g;r()[b/a0+ R]=f}),arguments)};b.wbg.__wbg_port_be2aeb97d2bf49c7=function(){return D(((b,d)=>{const e=c(d).port;const f=o(e,a.__wbindgen_malloc,a.__wbindgen_realloc);const g=l;r()[b/a0+ T]=g;r()[b/a0+ R]=f}),arguments)};b.wbg.__wbg_search_40927d5af164fdfe=function(){return D(((b,d)=>{const e=c(d).search;const f=o(e,a.__wbindgen_malloc,a.__wbindgen_realloc);const g=l;r()[b/a0+ T]=g;r()[b/a0+ R]=f}),arguments)};b.wbg.__wbg_hash_163703b5971e593c=function(){return D(((b,d)=>{const e=c(d).hash;const f=o(e,a.__wbindgen_malloc,a.__wbindgen_realloc);const g=l;r()[b/a0+ T]=g;r()[b/a0+ R]=f}),arguments)};b.wbg.__wbg_instanceof_Response_b5451a06784a2404=(a=>{let b;try{b=c(a) instanceof Response}catch(a){b=!1}const d=b;return d});b.wbg.__wbg_url_e319aee56d26ddf1=((b,d)=>{const e=c(d).url;const f=o(e,a.__wbindgen_malloc,a.__wbindgen_realloc);const g=l;r()[b/a0+ T]=g;r()[b/a0+ R]=f});b.wbg.__wbg_status_bea567d1049f0b6a=(a=>{const b=c(a).status;return b});b.wbg.__wbg_ok_d44e03dcd4b678b0=(a=>{const b=c(a).ok;return b});b.wbg.__wbg_statusText_9f8aede060c44220=((b,d)=>{const e=c(d).statusText;const f=o(e,a.__wbindgen_malloc,a.__wbindgen_realloc);const g=l;r()[b/a0+ T]=g;r()[b/a0+ R]=f});b.wbg.__wbg_headers_96d9457941f08a33=(a=>{const b=c(a).headers;return k(b)});b.wbg.__wbg_arrayBuffer_eb2005809be09726=function(){return D((a=>{const b=c(a).arrayBuffer();return k(b)}),arguments)};b.wbg.__wbg_setcssText_5fcd898cd04af9d6=((a,b,d)=>{c(a).cssText=j(b,d)});b.wbg.__wbg_setProperty_5144ddce66bbde41=function(){return D(((a,b,d,e,f)=>{c(a).setProperty(j(b,d),j(e,f))}),arguments)};b.wbg.__wbg_instanceof_HtmlButtonElement_14fa6b2a967983b4=(a=>{let b;try{b=c(a) instanceof HTMLButtonElement}catch(a){b=!1}const d=b;return d});b.wbg.__wbg_clipboard_5af3ff5a73355205=(a=>{const b=c(a).clipboard;return p(b)?R:k(b)});b.wbg.__wbg_userAgent_6dbd12d01f988f5f=function(){return D(((b,d)=>{const e=c(d).userAgent;const f=o(e,a.__wbindgen_malloc,a.__wbindgen_realloc);const g=l;r()[b/a0+ T]=g;r()[b/a0+ R]=f}),arguments)};b.wbg.__wbg_bindVertexArrayOES_fd441111fdf91a30=((a,b)=>{c(a).bindVertexArrayOES(c(b))});b.wbg.__wbg_createVertexArrayOES_51189386ff9903a2=(a=>{const b=c(a).createVertexArrayOES();return p(b)?R:k(b)});b.wbg.__wbg_clipboardData_9f222911c8d847db=(a=>{const b=c(a).clipboardData;return p(b)?R:k(b)});b.wbg.__wbg_instanceof_HtmlCanvasElement_1e81f71f630e46bc=(a=>{let b;try{b=c(a) instanceof HTMLCanvasElement}catch(a){b=!1}const d=b;return d});b.wbg.__wbg_width_aa1ac55fb41db6ae=(a=>{const b=c(a).width;return b});b.wbg.__wbg_setwidth_233645b297bb3318=((a,b)=>{c(a).width=b>>>R});b.wbg.__wbg_height_bea901cd16645fb7=(a=>{const b=c(a).height;return b});b.wbg.__wbg_setheight_fcb491cf54e3527c=((a,b)=>{c(a).height=b>>>R});b.wbg.__wbg_getContext_dfc91ab0837db1d1=function(){return D(((a,b,d)=>{const e=c(a).getContext(j(b,d));return p(e)?R:k(e)}),arguments)};b.wbg.__wbg_getItem_5c179cd36e9529e8=function(){return D(((b,d,e,f)=>{const g=c(d).getItem(j(e,f));var h=p(g)?R:o(g,a.__wbindgen_malloc,a.__wbindgen_realloc);var i=l;r()[b/a0+ T]=i;r()[b/a0+ R]=h}),arguments)};b.wbg.__wbg_setItem_7b55989efb4d45f7=function(){return D(((a,b,d,e,f)=>{c(a).setItem(j(b,d),j(e,f))}),arguments)};b.wbg.__wbg_writeText_872183cf5e9535ff=((a,b,d)=>{const e=c(a).writeText(j(b,d));return k(e)});b.wbg.__wbg_data_bb29dff4a6557791=((b,d)=>{const e=c(d).data;var f=p(e)?R:o(e,a.__wbindgen_malloc,a.__wbindgen_realloc);var g=l;r()[b/a0+ T]=g;r()[b/a0+ R]=f});b.wbg.__wbg_preventDefault_657cbf753df1396c=(a=>{c(a).preventDefault()});b.wbg.__wbg_stopPropagation_806520d93e80bcf7=(a=>{c(a).stopPropagation()});b.wbg.__wbg_set_4ad92a627c50c8ef=function(){return D(((a,b,d,e,f)=>{c(a).set(j(b,d),j(e,f))}),arguments)};b.wbg.__wbg_matches_b18b6193e5512cde=(a=>{const b=c(a).matches;return b});b.wbg.__wbg_clientX_2d1be024f35f3981=(a=>{const b=c(a).clientX;return b});b.wbg.__wbg_clientY_967af1c2b0177a9f=(a=>{const b=c(a).clientY;return b});b.wbg.__wbg_ctrlKey_2817108375a63e7c=(a=>{const b=c(a).ctrlKey;return b});b.wbg.__wbg_shiftKey_87d2a9527cefdf3d=(a=>{const b=c(a).shiftKey;return b});b.wbg.__wbg_metaKey_35f1fd33c4e0c5df=(a=>{const b=c(a).metaKey;return b});b.wbg.__wbg_button_43d11b000a7126cf=(a=>{const b=c(a).button;return b});b.wbg.__wbg_identifier_1bbeeef4f8c3644c=(a=>{const b=c(a).identifier;return b});b.wbg.__wbg_pageX_1a662c5236b65a8c=(a=>{const b=c(a).pageX;return b});b.wbg.__wbg_pageY_7d28263e3ca120f8=(a=>{const b=c(a).pageY;return b});b.wbg.__wbg_force_a23dc68752bbd295=(a=>{const b=c(a).force;return b});b.wbg.__wbg_size_97217f6c840f58b2=(a=>{const b=c(a).size;return b});b.wbg.__wbg_type_6c31bd72c3383cba=((b,d)=>{const e=c(d).type;const f=o(e,a.__wbindgen_malloc,a.__wbindgen_realloc);const g=l;r()[b/a0+ T]=g;r()[b/a0+ R]=f});b.wbg.__wbg_newwithbuffersourcesequence_676a553e472936af=function(){return D((a=>{const b=new Blob(c(a));return k(b)}),arguments)};b.wbg.__wbg_newwithu8arraysequenceandoptions_5a265a21dee7aa0c=function(){return D(((a,b)=>{const d=new Blob(c(a),c(b));return k(d)}),arguments)};b.wbg.__wbg_arrayBuffer_800ebf8dca614366=(a=>{const b=c(a).arrayBuffer();return k(b)});b.wbg.__wbg_length_e5ff7777627bc19e=(a=>{const b=c(a).length;return b});b.wbg.__wbg_get_0aa6219f7b9f2100=((a,b)=>{const d=c(a)[b>>>R];return p(d)?R:k(d)});b.wbg.__wbg_dataTransfer_c3dfe779ef079bcc=(a=>{const b=c(a).dataTransfer;return p(b)?R:k(b)});b.wbg.__wbg_name_9762a5bb951e00c1=((b,d)=>{const e=c(d).name;const f=o(e,a.__wbindgen_malloc,a.__wbindgen_realloc);const g=l;r()[b/a0+ T]=g;r()[b/a0+ R]=f});b.wbg.__wbg_lastModified_679a43283963f658=(a=>{const b=c(a).lastModified;return b});b.wbg.__wbg_keyCode_8c7511bf92389868=(a=>{const b=c(a).keyCode;return b});b.wbg.__wbg_altKey_580c95fbc9461164=(a=>{const b=c(a).altKey;return b});b.wbg.__wbg_ctrlKey_032bd6905bacba55=(a=>{const b=c(a).ctrlKey;return b});b.wbg.__wbg_shiftKey_a84ea8856781bd54=(a=>{const b=c(a).shiftKey;return b});b.wbg.__wbg_metaKey_fe405998712e46a0=(a=>{const b=c(a).metaKey;return b});b.wbg.__wbg_isComposing_750f53009cbfb833=(a=>{const b=c(a).isComposing;return b});b.wbg.__wbg_key_0527970a852413ca=((b,d)=>{const e=c(d).key;const f=o(e,a.__wbindgen_malloc,a.__wbindgen_realloc);const g=l;r()[b/a0+ T]=g;r()[b/a0+ R]=f});b.wbg.__wbg_type_023f810f636fd950=((b,d)=>{const e=c(d).type;const f=o(e,a.__wbindgen_malloc,a.__wbindgen_realloc);const g=l;r()[b/a0+ T]=g;r()[b/a0+ R]=f});b.wbg.__wbg_top_44a8c250dcea0251=(a=>{const b=c(a).top;return b});b.wbg.__wbg_left_52377628791ffcf6=(a=>{const b=c(a).left;return b});b.wbg.__wbg_length_29ed7aaf6bb5a432=(a=>{const b=c(a).length;return b});b.wbg.__wbg_get_a5a83ff42873c81d=((a,b)=>{const d=c(a)[b>>>R];return p(d)?R:k(d)});b.wbg.__wbg_instanceof_HtmlAnchorElement_9b05407929158ee7=(a=>{let b;try{b=c(a) instanceof HTMLAnchorElement}catch(a){b=!1}const d=b;return d});b.wbg.__wbg_setdownload_fedf9b10c803d8e9=((a,b,d)=>{c(a).download=j(b,d)});b.wbg.__wbg_sethref_b9d9f44029d2eb26=((a,b,d)=>{c(a).href=j(b,d)});b.wbg.__wbg_now_ef71656beb948bc8=(a=>{const b=c(a).now();return b});b.wbg.__wbg_headers_bb094b3567fea691=(a=>{const b=c(a).headers;return k(b)});b.wbg.__wbg_newwithstrandinit_11fbc38beb4c26b0=function(){return D(((a,b,d)=>{const e=new Request(j(a,b),c(d));return k(e)}),arguments)};b.wbg.__wbg_result_0a06634471fffc2d=function(){return D((a=>{const b=c(a).result;return k(b)}),arguments)};b.wbg.__wbg_setonload_37ef6198bfedb8ac=((a,b)=>{c(a).onload=c(b)});b.wbg.__wbg_new_1401c89cd913546d=function(){return D((()=>{const a=new FileReader();return k(a)}),arguments)};b.wbg.__wbg_readAsArrayBuffer_8656ba15dd0b0c0f=function(){return D(((a,b)=>{c(a).readAsArrayBuffer(c(b))}),arguments)};b.wbg.__wbg_instanceof_HtmlInputElement_189f182751dc1f5e=(a=>{let b;try{b=c(a) instanceof HTMLInputElement}catch(a){b=!1}const d=b;return d});b.wbg.__wbg_setaccept_6475de7a0462a15e=((a,b,d)=>{c(a).accept=j(b,d)});b.wbg.__wbg_setautofocus_3ac9b87146e5cd21=((a,b)=>{c(a).autofocus=b!==R});b.wbg.__wbg_files_bf2677e1b0984544=(a=>{const b=c(a).files;return p(b)?R:k(b)});b.wbg.__wbg_setmultiple_c82f7d04b728bed9=((a,b)=>{c(a).multiple=b!==R});b.wbg.__wbg_setsize_c0546cf8c51a0e77=((a,b)=>{c(a).size=b>>>R});b.wbg.__wbg_settype_f64d4f947bfa3b81=((a,b,d)=>{c(a).type=j(b,d)});b.wbg.__wbg_value_99f5294791d62576=((b,d)=>{const e=c(d).value;const f=o(e,a.__wbindgen_malloc,a.__wbindgen_realloc);const g=l;r()[b/a0+ T]=g;r()[b/a0+ R]=f});b.wbg.__wbg_setvalue_bba31de32cdbb32c=((a,b,d)=>{c(a).value=j(b,d)});b.wbg.__wbg_length_82b5ad246042df8b=(a=>{const b=c(a).length;return b});b.wbg.__wbg_item_f29aac628e55f885=((a,b)=>{const d=c(a).item(b>>>R);return p(d)?R:k(d)});b.wbg.__wbg_get_1a995928c199f987=((a,b)=>{const d=c(a)[b>>>R];return p(d)?R:k(d)});b.wbg.__wbg_deltaX_5ddc4c69f2887db9=(a=>{const b=c(a).deltaX;return b});b.wbg.__wbg_deltaY_0ba2dcd707862292=(a=>{const b=c(a).deltaY;return b});b.wbg.__wbg_deltaMode_ed2d0b2e0a547b92=(a=>{const b=c(a).deltaMode;return b});b.wbg.__wbg_width_faa64c8759fdff80=(a=>{const b=c(a).width;return b});b.wbg.__wbg_height_bdf3f02c617ef055=(a=>{const b=c(a).height;return b});b.wbg.__wbg_touches_156ae51fb3534e87=(a=>{const b=c(a).touches;return k(b)});b.wbg.__wbg_changedTouches_2a84bde1dd7ea44a=(a=>{const b=c(a).changedTouches;return k(b)});b.wbg.__wbg_createObjectURL_cef24a3ceb83c13c=function(){return D(((b,d)=>{const e=URL.createObjectURL(c(d));const f=o(e,a.__wbindgen_malloc,a.__wbindgen_realloc);const g=l;r()[b/a0+ T]=g;r()[b/a0+ R]=f}),arguments)};b.wbg.__wbg_revokeObjectURL_5b369ea61a050aec=function(){return D(((a,b)=>{URL.revokeObjectURL(j(a,b))}),arguments)};b.wbg.__wbg_error_b834525fe62708f5=(a=>{console.error(c(a))});b.wbg.__wbg_matches_f58a5f0b7cbb150c=(a=>{const b=c(a).matches;return b});b.wbg.__wbg_parentElement_45a9756dc74ff48b=(a=>{const b=c(a).parentElement;return p(b)?R:k(b)});b.wbg.__wbg_appendChild_4153ba1b5d54d73b=function(){return D(((a,b)=>{const d=c(a).appendChild(c(b));return k(d)}),arguments)};b.wbg.__wbg_get_0ee8ea3c7c984c45=((a,b)=>{const d=c(a)[b>>>R];return k(d)});b.wbg.__wbg_length_161c0d89c6535c1d=(a=>{const b=c(a).length;return b});b.wbg.__wbg_new_75208e29bddfd88c=(()=>{const a=new L();return k(a)});b.wbg.__wbg_newnoargs_cfecb3965268594c=((a,b)=>{const c=new Function(j(a,b));return k(c)});b.wbg.__wbindgen_is_object=(a=>{const b=c(a);const d=typeof b===`object`&&b!==N;return d});b.wbg.__wbg_next_586204376d2ed373=(a=>{const b=c(a).next;return k(b)});b.wbg.__wbg_next_b2d3366343a208b3=function(){return D((a=>{const b=c(a).next();return k(b)}),arguments)};b.wbg.__wbg_done_90b14d6f6eacc42f=(a=>{const b=c(a).done;return b});b.wbg.__wbg_value_3158be908c80a75e=(a=>{const b=c(a).value;return k(b)});b.wbg.__wbg_iterator_40027cdd598da26b=(()=>{const a=Symbol.iterator;return k(a)});b.wbg.__wbg_get_3fddfed2c83f434c=function(){return D(((a,b)=>{const d=a1.get(c(a),c(b));return k(d)}),arguments)};b.wbg.__wbg_call_3f093dd26d5569f8=function(){return D(((a,b)=>{const d=c(a).call(c(b));return k(d)}),arguments)};b.wbg.__wbg_new_632630b5cec17f21=(()=>{const a=new Object();return k(a)});b.wbg.__wbg_self_05040bd9523805b9=function(){return D((()=>{const a=self.self;return k(a)}),arguments)};b.wbg.__wbg_window_adc720039f2cb14f=function(){return D((()=>{const a=window.window;return k(a)}),arguments)};b.wbg.__wbg_globalThis_622105db80c1457d=function(){return D((()=>{const a=globalThis.globalThis;return k(a)}),arguments)};b.wbg.__wbg_global_f56b013ed9bcf359=function(){return D((()=>{const a=global.global;return k(a)}),arguments)};b.wbg.__wbg_newwithlength_a20dc3b27e1cb1b2=(a=>{const b=new L(a>>>R);return k(b)});b.wbg.__wbg_set_79c308ecd9a1d091=((a,b,d)=>{c(a)[b>>>R]=f(d)});b.wbg.__wbg_push_0239ee92f127e807=((a,b)=>{const d=c(a).push(c(b));return d});b.wbg.__wbg_call_67f2111acd2dfdb6=function(){return D(((a,b,d)=>{const e=c(a).call(c(b),c(d));return k(e)}),arguments)};b.wbg.__wbg_instanceof_TypeError_869542e228010071=(a=>{let b;try{b=c(a) instanceof TypeError}catch(a){b=!1}const d=b;return d});b.wbg.__wbg_new_70828a4353259d4b=((a,b)=>{try{var c={a:a,b:b};var d=(a,b)=>{const d=c.a;c.a=R;try{return E(d,c.b,a,b)}finally{c.a=d}};const e=new a2(d);return k(e)}finally{c.a=c.b=R}});b.wbg.__wbg_resolve_5da6faf2c96fd1d5=(a=>{const b=a2.resolve(c(a));return k(b)});b.wbg.__wbg_then_f9e58f5a50f43eae=((a,b)=>{const d=c(a).then(c(b));return k(d)});b.wbg.__wbg_then_20a5920e447d1cb1=((a,b,d)=>{const e=c(a).then(c(b),c(d));return k(e)});b.wbg.__wbg_buffer_b914fb8b50ebbc3e=(a=>{const b=c(a).buffer;return k(b)});b.wbg.__wbg_newwithbyteoffsetandlength_42904a72cefa1e00=((a,b,d)=>{const e=new Int8Array(c(a),b>>>R,d>>>R);return k(e)});b.wbg.__wbg_newwithbyteoffsetandlength_0aafe9b39ed85f71=((a,b,d)=>{const e=new Int16Array(c(a),b>>>R,d>>>R);return k(e)});b.wbg.__wbg_newwithbyteoffsetandlength_9ca2c1faeb430732=((a,b,d)=>{const e=new V(c(a),b>>>R,d>>>R);return k(e)});b.wbg.__wbg_newwithbyteoffsetandlength_0de9ee56e9f6ee6e=((a,b,d)=>{const e=new S(c(a),b>>>R,d>>>R);return k(e)});b.wbg.__wbg_new_b1f2d6842d615181=(a=>{const b=new S(c(a));return k(b)});b.wbg.__wbg_set_7d988c98e6ced92d=((a,b,d)=>{c(a).set(c(b),d>>>R)});b.wbg.__wbg_length_21c4b0ae73cba59d=(a=>{const b=c(a).length;return b});b.wbg.__wbg_newwithbyteoffsetandlength_8c2171d5a9b7f791=((a,b,d)=>{const e=new Uint16Array(c(a),b>>>R,d>>>R);return k(e)});b.wbg.__wbg_newwithbyteoffsetandlength_7f2d9491ea8c746e=((a,b,d)=>{const e=new Uint32Array(c(a),b>>>R,d>>>R);return k(e)});b.wbg.__wbg_newwithbyteoffsetandlength_5fd0a60d38f47fa6=((a,b,d)=>{const e=new Float32Array(c(a),b>>>R,d>>>R);return k(e)});b.wbg.__wbg_buffer_67e624f5a0ab2319=(a=>{const b=c(a).buffer;return k(b)});b.wbg.__wbg_set_961700853a212a39=function(){return D(((a,b,d)=>{const e=a1.set(c(a),c(b),c(d));return e}),arguments)};b.wbg.__wbindgen_debug_string=((b,d)=>{const e=u(c(d));const f=o(e,a.__wbindgen_malloc,a.__wbindgen_realloc);const g=l;r()[b/a0+ T]=g;r()[b/a0+ R]=f});b.wbg.__wbindgen_throw=((a,b)=>{throw new Q(j(a,b))});b.wbg.__wbindgen_memory=(()=>{const b=a.memory;return k(b)});b.wbg.__wbindgen_closure_wrapper597=((a,b,c)=>{const d=w(a,b,66,x);return k(d)});b.wbg.__wbindgen_closure_wrapper652=((a,b,c)=>{const d=w(a,b,115,y);return k(d)});b.wbg.__wbindgen_closure_wrapper5733=((a,b,c)=>{const d=w(a,b,a3,z);return k(d)});b.wbg.__wbindgen_closure_wrapper5735=((a,b,c)=>{const d=w(a,b,a3,A);return k(d)});b.wbg.__wbindgen_closure_wrapper5737=((a,b,c)=>{const d=w(a,b,a3,B);return k(d)});b.wbg.__wbindgen_closure_wrapper5856=((a,b,c)=>{const d=w(a,b,2223,C);return k(d)});return b});var e=(a=>{if(a<132)return;b[a]=d;d=a});var w=((b,c,d,e)=>{const f={a:b,b:c,cnt:T,dtor:d};const g=(...b)=>{f.cnt++;const c=f.a;f.a=R;try{return e(c,f.b,...b)}finally{if(--f.cnt===R){a.__wbindgen_export_2.get(f.dtor)(c,f.b);v.unregister(f)}else{f.a=c}}};g.original=f;v.register(g,f,f);return g});var o=((a,b,c)=>{if(c===M){const c=m.encode(a);const d=b(c.length,T)>>>R;i().subarray(d,d+ c.length).set(c);l=c.length;return d};let d=a.length;let e=b(d,T)>>>R;const f=i();let g=R;for(;g<d;g++){const b=a.charCodeAt(g);if(b>127)break;f[e+ g]=b};if(g!==d){if(g!==R){a=a.slice(g)};e=c(e,d,d=g+ a.length*3,T)>>>R;const b=i().subarray(e+ g,e+ d);const f=n(a,b);g+=f.written;e=c(e,d,g,T)>>>R};l=g;return e});var i=(()=>{if(h===N||h.byteLength===R){h=new S(a.memory.buffer)};return h});var j=((a,b)=>{a=a>>>R;return g.decode(i().subarray(a,a+ b))});var z=((b,c)=>{try{const g=a.__wbindgen_add_to_stack_pointer(-$);a.wasm_bindgen__convert__closures__invoke0_mut__h27db1531dc0c05ce(g,b,c);var d=r()[g/a0+ R];var e=r()[g/a0+ T];if(e){throw f(d)}}finally{a.__wbindgen_add_to_stack_pointer($)}});let a;const b=new L(128).fill(M);b.push(M,N,!0,!1);let d=b.length;const g=typeof TextDecoder!==O?new TextDecoder(P,{ignoreBOM:!0,fatal:!0}):{decode:()=>{throw Q(`TextDecoder not available`)}};if(typeof TextDecoder!==O){g.decode()};let h=N;let l=R;const m=typeof TextEncoder!==O?new TextEncoder(P):{encode:()=>{throw Q(`TextEncoder not available`)}};const n=typeof m.encodeInto===U?((a,b)=>m.encodeInto(a,b)):((a,b)=>{const c=m.encode(a);b.set(c);return {read:a.length,written:c.length}});let q=N;let s=N;const v=typeof _===O?{register:()=>{},unregister:()=>{}}:new _(b=>{a.__wbindgen_export_2.get(b.dtor)(b.a,b.b)});export default K;export{J as initSync}