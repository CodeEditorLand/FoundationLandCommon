var s=async(...[e])=>{if(e instanceof Map){const t={};for(const[r,a]of e.entries())a instanceof Map?t[r]=await(await import("@Function/Put.js")).default(a):t[r]=a;return t}return e};export{s as default};
