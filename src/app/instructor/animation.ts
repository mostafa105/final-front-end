import { animate, state, style, transition, trigger } from '@angular/animations';
export let fade =   trigger('fade',[
                    state('void', style({opacity:0 ,width:0 ,padding:0 })),
                     transition(':enter , :leave' ,
                    [ animate(500)]
                                 )
                            ])
export let showfilter =   trigger('showfilter',[
                    state('void', style({opacity:0 ,height:0 ,padding:0 })),
                     transition(':enter , :leave' ,
                    [ animate(500)]
                                 )
                            ])
export let showaddquestion =   trigger('showaddquestion',[
               state('void', style({opacity:0 ,width:0 ,padding:0 ,backgroundcolor: 'black'})),
               transition(':enter , :leave' ,
               [ animate(1000)]
                               )
                         ])

export let fadein =   trigger('fadein',[
               state('void', style({opacity:0  })),
               transition(':enter , :leave' ,
               [ animate(500)]
                               )
                    ])