__NUXT_JSONP__("/blog/Altium", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J){return {data:[{article:{slug:"Altium",description:"Tools, tips and tricks for PCB designing using Altium Designer",title:"Altium designer tips and tricks",date:"2020-10-10T00:00:00.000Z",img:"\u002Fimgs\u002Fblog\u002Faltium.png",lang:"en",tocgenerate:d,publish:d,tags:["Electronics","PCB","STM32"],toc:[{id:t,depth:p,text:u},{id:v,depth:p,text:w},{id:x,depth:p,text:y},{id:z,depth:A,text:B},{id:C,depth:A,text:D},{id:E,depth:p,text:F},{id:G,depth:p,text:H}],body:{type:"root",children:[{type:b,tag:i,props:{},children:[{type:b,tag:"img",props:{alt:"",src:"\u002Fimgs\u002Fblog\u002Faltium.jpg"},children:[]}]},{type:a,value:c},{type:b,tag:q,props:{id:t},children:[{type:b,tag:j,props:{href:"#libraries",ariaHidden:k,tabIndex:l},children:[{type:b,tag:m,props:{className:[n,o]},children:[]}]},{type:a,value:u}]},{type:a,value:c},{type:b,tag:i,props:{},children:[{type:a,value:"I have several free component libraries that you can access via my github repo."},{type:b,tag:"br",props:{},children:[]},{type:a,value:c},{type:b,tag:j,props:{href:I,rel:["nofollow","noopener","noreferrer"],target:"_blank"},children:[{type:a,value:I}]}]},{type:a,value:c},{type:b,tag:q,props:{id:v},children:[{type:b,tag:j,props:{href:"#notes-before-starting-a-schematic",ariaHidden:k,tabIndex:l},children:[{type:b,tag:m,props:{className:[n,o]},children:[]}]},{type:a,value:w}]},{type:a,value:c},{type:b,tag:r,props:{className:[s]},children:[{type:a,value:c},{type:b,tag:e,props:{className:[f]},children:[{type:b,tag:g,props:{disabled:d,type:h},children:[]},{type:a,value:" Check for evaluation boards for each components that you havent use before"}]},{type:a,value:c},{type:b,tag:e,props:{className:[f]},children:[{type:b,tag:g,props:{disabled:d,type:h},children:[]},{type:a,value:" Design your schematic identical to evaluation board schematic so it would be easy to review"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:q,props:{id:x},children:[{type:b,tag:j,props:{href:"#schematic-design-final-check-list",ariaHidden:k,tabIndex:l},children:[{type:b,tag:m,props:{className:[n,o]},children:[]}]},{type:a,value:y}]},{type:a,value:c},{type:b,tag:J,props:{id:z},children:[{type:b,tag:j,props:{href:"#microcontrollers-and-pins",ariaHidden:k,tabIndex:l},children:[{type:b,tag:m,props:{className:[n,o]},children:[]}]},{type:a,value:B}]},{type:a,value:c},{type:b,tag:r,props:{className:[s]},children:[{type:a,value:c},{type:b,tag:e,props:{className:[f]},children:[{type:a,value:c},{type:b,tag:i,props:{},children:[{type:b,tag:g,props:{disabled:d,type:h},children:[]},{type:a,value:" Check Open Drain pins to have appropriate pull-up or pull-down resistors"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:e,props:{className:[f]},children:[{type:a,value:c},{type:b,tag:i,props:{},children:[{type:b,tag:g,props:{disabled:d,type:h},children:[]},{type:a,value:" Check microcontroller pins for voltages higher than 3.3v. Not all microcontroller pins are 5v tolerant. Specially when running as a alternative functions such as ADC, they are not 5v tolerant. Each pins that connected to a voltage higher than 3.3v should be checked individually against datasheet."}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:e,props:{className:[f]},children:[{type:a,value:c},{type:b,tag:i,props:{},children:[{type:b,tag:g,props:{disabled:d,type:h},children:[]},{type:a,value:" Check against STM32Cube Configuration"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:e,props:{className:[f]},children:[{type:a,value:c},{type:b,tag:i,props:{},children:[{type:b,tag:g,props:{disabled:d,type:h},children:[]},{type:a,value:" Make sure differential pairs have appropriate {NETName}_P and {NETNAME}_N"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:e,props:{className:[f]},children:[{type:a,value:c},{type:b,tag:i,props:{},children:[{type:b,tag:g,props:{disabled:d,type:h},children:[]},{type:a,value:" Estimate the power dissipation for Linear regulators"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:e,props:{className:[f]},children:[{type:a,value:c},{type:b,tag:i,props:{},children:[{type:b,tag:g,props:{disabled:d,type:h},children:[]},{type:a,value:" Check the Enable and CS pins active level, Active High  or Active"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:e,props:{className:[f]},children:[{type:a,value:c},{type:b,tag:i,props:{},children:[{type:b,tag:g,props:{disabled:d,type:h},children:[]},{type:a,value:" Check for 3.3v, +3.3v, 3v3, 3V3 power nets naming issues"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:e,props:{className:[f]},children:[{type:a,value:c},{type:b,tag:i,props:{},children:[{type:b,tag:g,props:{disabled:d,type:h},children:[]},{type:a,value:" Put a reference for the component datasheet"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:e,props:{className:[f]},children:[{type:a,value:c},{type:b,tag:i,props:{},children:[{type:b,tag:g,props:{disabled:d,type:h},children:[]},{type:a,value:" Check GND and VCC nets are okay and they are not used vice versa"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:e,props:{className:[f]},children:[{type:a,value:c},{type:b,tag:i,props:{},children:[{type:b,tag:g,props:{disabled:d,type:h},children:[]},{type:a,value:" Check if exposed pads should be connected to ground"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:e,props:{className:[f]},children:[{type:a,value:c},{type:b,tag:i,props:{},children:[{type:b,tag:g,props:{disabled:d,type:h},children:[]},{type:a,value:" Did you choose the right part number for special capacitors and resistors ?"}]},{type:a,value:c},{type:b,tag:r,props:{className:[s]},children:[{type:a,value:c},{type:b,tag:e,props:{className:[f]},children:[{type:b,tag:g,props:{disabled:d,type:h},children:[]},{type:a,value:" Consider the voltage and ESR of the capacitors"}]},{type:a,value:c},{type:b,tag:e,props:{className:[f]},children:[{type:b,tag:g,props:{disabled:d,type:h},children:[]},{type:a,value:" Power and heat dissipation of the resistors"}]},{type:a,value:c}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:e,props:{className:[f]},children:[{type:a,value:c},{type:b,tag:i,props:{},children:[{type:b,tag:g,props:{disabled:d,type:h},children:[]},{type:a,value:" Is your circuit going to work in US ? In US the household electricity frequency is 60Hz ."}]},{type:a,value:c}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:J,props:{id:C},children:[{type:b,tag:j,props:{href:"#opamps",ariaHidden:k,tabIndex:l},children:[{type:b,tag:m,props:{className:[n,o]},children:[]}]},{type:a,value:D}]},{type:a,value:c},{type:b,tag:r,props:{className:[s]},children:[{type:a,value:c},{type:b,tag:e,props:{className:[f]},children:[{type:b,tag:g,props:{disabled:d,type:h},children:[]},{type:a,value:" Check amplifier inputs voltage that does not exceed the amplifier supply voltage rail"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:q,props:{id:E},children:[{type:b,tag:j,props:{href:"#pcb-design-final-checklist",ariaHidden:k,tabIndex:l},children:[{type:b,tag:m,props:{className:[n,o]},children:[]}]},{type:a,value:F}]},{type:a,value:c},{type:b,tag:r,props:{className:[s]},children:[{type:a,value:c},{type:b,tag:e,props:{className:[f]},children:[{type:b,tag:g,props:{disabled:d,type:h},children:[]},{type:a,value:" Thermal Pads"}]},{type:a,value:c},{type:b,tag:e,props:{className:[f]},children:[{type:b,tag:g,props:{disabled:d,type:h},children:[]},{type:a,value:" Make sure that you don't have power loops in  your circuit"}]},{type:a,value:c},{type:b,tag:e,props:{className:[f]},children:[{type:b,tag:g,props:{disabled:d,type:h},children:[]},{type:a,value:" Check the thermal pads for linear regulators"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:q,props:{id:G},children:[{type:b,tag:j,props:{href:"#common-pcb-design-problems",ariaHidden:k,tabIndex:l},children:[{type:b,tag:m,props:{className:[n,o]},children:[]}]},{type:a,value:H}]}]},dir:"\u002Farticles",path:"\u002Farticles\u002FAltium",extension:".md",createdAt:"2020-11-12T20:08:17.523Z",updatedAt:"2021-01-09T15:57:07.667Z"}}],fetch:[],mutations:void 0}}("text","element","\n",true,"li","task-list-item","input","checkbox","p","a","true",-1,"span","icon","icon-link",2,"h2","ul","contains-task-list","libraries","Libraries","notes-before-starting-a-schematic","Notes before starting a schematic","schematic-design-final-check-list","Schematic Design Final Check List","microcontrollers-and-pins",3,"Microcontrollers and Pins","opamps","OPAmps","pcb-design-final-checklist","PCB Design final checklist","common-pcb-design-problems","Common PCB design problems","https:\u002F\u002Fgithub.com\u002FHamedJafarzadeh\u002FAltiumDesignerLibs","h3")));