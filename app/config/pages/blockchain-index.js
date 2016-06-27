module.exports = {
    view: "index",
    optional_path: ".html",
    global_navigation: {},
    content:{
      is_index: true,
      google_site_verification:"",
      pagetitle:'IBM Blockchain',
      meta_description:'IBM Blockchain and the revolutionary shared ledger technology can help your enterprise business solve complex problems now and in the near future.',
      meta_keywords:'blockchain',
      canonical:'http://www.ibm.com/blockchain/',
      segment_naming:{
        property:'Home (IBM.com)',
        value:'Home Page'
      },
      analytics:{
          "wipi" :  true,
          "tealeaf" :  false,
          "hotjar" :  true,
          "coremetrics" :  false,
          "optimizely" :  true,
          "segment" :  true,
          "enabled" :  true,
          "segment_key" : "P1YMMnwSrsufGrHpg6uUzgVhaQXaP921"
      },
      digitalData:{
        primaryCategory:'IBMBLOCKCHAINHOME',
        pageID:'http://www.ibm.com/blockchain',
        siteID:'BLOCKCHAIN'
      },
      stylesheet:[],
      javascript:["/javascripts/main-v2.js"
      ],
      breadcrumbsEnabled: false,
      breadcrumbsClass:"ibm-textcolor-white-core",
      breadcrumbs:[{
                    label:'Overview',
                    url:'javascript: void(0);'
                  },
              ],
      leadspace:{
          leadspaceimg:"",
          social:{
            enabled: true
          },
          features: {
              enabled: false,
              list:[
                  "",
                  "",
                  ""
              ]
          },
          leadspace_video:{
              enabled: false,
              video:{
                  url:"",
                  id:"",
                  type:"",
                  img:""
              },
          },
          header: "IBM Blockchain POV",
          subhead: "25 words Lorem ipsum dolor. Sit amet pede. Ipsum nam mauris. Morbi in sit augue risus sem nam est scelerisque. Explicabo vel luctus sodales quis ipsum et.",
          primary_cta:{
              enabled: false,
              cta:{
                  href:"#",
                  text: "Watch Video",
                  onClick:"goPage(this); return false;"
              }
          },
          secondary_cta:{
              enabled: false,
              cta:[
                  {
                      href:"#",
                      text: "Pricing"
                  },
                  {
                      href:"#",
                      text: "Get started"
                  }
              ]
          }
      },
      modules:[
        {
          temp:"products",
          content:{
            class:"ibm-band ibm-padding-top-2",
            headline:"Featured Content",
          }
        },
        {
          temp: "featureGridHome"
        },

/*        {
            temp:"ibmCarousel",
            content:{
              class:"ibm-band ibm-padding-top-2 ibm-padding-bottom-2",
              background:"background: #00b0d9;",
              headline:"",
              carouselClass:"ibm-columns ibm-carousel__controls--light ibm-carousel__arrows--large",
              dataHorizontal:true,
              dataDots:true,
              dataArrows:true,
              dataAutoplay:false,
              slides:{
                class:"",
                slide:[
                  {
                    cards:{
                      class:"ibm-col-6-5 ibm-center-block ibm-textcolor-white-core ibm-alternate-background",
                      style:"border:none;background-color:transparent;",
                      card:[
                        {
                          eyebrowInCardContent:{
                            text:"Featured Content",
                            class:"ibm-h5 ibm-textcolor-black-core"
                          },
                          subhead:"Headline",
                          text:"Lorem ipsum dolor sit amet, scelerisque dapibus, sit laudantium dui elit, vestibulum sed a. Conubia at massa condimentum wisi, accumsan purus lacus ut nec, enim tellus id, orci mauris dictumst luctus at.",
                          cta:{
                            parentClass:"ibm-btn-link ibm-padding-top-2",
                            class:" ibm-btn-pri ibm-btn-white",
                            text:"See how",
                            url:"#",
                            target:"_blank",
                            onClick:""
                          }
                        }
                      ]
                    }
                  },
                  {
                    cards:{
                      class:"ibm-col-6-5 ibm-center-block ibm-textcolor-white-core ibm-alternate-background",
                      style:"border:none;background-color:transparent;",
                      card:[
                        {
                          eyebrowInCardContent:{
                            text:"Featured Content",
                            class:"ibm-h5 ibm-textcolor-black-core"
                          },
                          subhead:"Headline",
                          text:"Lorem ipsum dolor sit amet, scelerisque dapibus, sit laudantium dui elit, vestibulum sed a. Conubia at massa condimentum wisi, accumsan purus lacus ut nec, enim tellus id, orci mauris dictumst luctus at.",
                          cta:{
                            parentClass:"ibm-btn-link ibm-padding-top-2",
                            class:" ibm-btn-pri ibm-btn-white",
                            text:"See how",
                            url:"#",
                            target:"_blank",
                            onClick:""
                          }
                        }
                      ]
                    }
                  },
                  {
                    cards:{
                      class:"ibm-col-6-5 ibm-center-block bm-textcolor-white-core ibm-alternate-background",
                      style:"border:none;background-color:transparent;",
                      card:[
                        {
                          eyebrowInCardContent:{
                            text:"Featured Content",
                            class:"ibm-h5 ibm-textcolor-black-core"
                          },
                          subhead:"Headline",
                          text:"Lorem ipsum dolor sit amet, scelerisque dapibus, sit laudantium dui elit, vestibulum sed a. Conubia at massa condimentum wisi, accumsan purus lacus ut nec, enim tellus id, orci mauris dictumst luctus at.",
                          cta:{
                            parentClass:"ibm-btn-link  ibm-padding-top-2",
                            class:" ibm-btn-pri ibm-btn-white",
                            text:"See how",
                            url:"#",
                            target:"_blank",
                            onClick:""
                          }
                        }
                      ]
                    }
                  }
                ]

              }

            }

          },
*/
          {
            temp:"products",
            content:{
              class:"ibm-band ibm-padding-top-2",
              background:"background:#fff;",
              headline:"IBM Blockchain in the News",
              cards:{
                class:"ibm-col-6-2",
                card:[
                  {
                    image:{
                      src:"/images/blockchain/fpo.svg",
                      alt:"image alt text"
                    },
                    subhead:"IBM Launches First Highly Secure Blockchain",
                    text:"Lorem ipsum dolor sit amet, phasellus lorem risus, a amet taciti, erat libero, ut fusce, suspendisse id cras semper auctor arcu. Magna risus mi ipsum urna vestibulum, pulvinar elit et dignissim habitant tellus.",
                    cta:{
                      parentClass:"ibm-ind-link ibm-padding-top-2",
                      class:" ibm-forward-link",
                      text:"Read more",
                      url:"#",
                      target:"_blank",
                      onClick:""
                    }
                  },
                  {
                    image:{
                      src:"/images/blockchain/fpo.svg",
                      alt:"image alt text"
                    },
                    subhead:"IBM and Japan’s Largest Stock Exchange to Test Blockchain",
                    text:"Lorem ipsum dolor sit amet, phasellus lorem risus, a amet taciti, erat libero, ut fusce, suspendisse id cras semper auctor arcu. Magna risus mi ipsum urna vestibulum, pulvinar elit et dignissim habitant tellus.",
                    cta:{
                      parentClass:"ibm-ind-link ibm-padding-top-2",
                      class:" ibm-forward-link",
                      text:"Read more",
                      url:"#",
                      target:"_blank",
                      onClick:""
                    }
                  },
                  {
                    image:{
                      src:"/images/blockchain/fpo.svg",
                      alt:"image alt text"
                    },
                    subhead:"IBM Delivers Blockchain-As-A- Service for Developers",
                    text:"Lorem ipsum dolor sit amet, phasellus lorem risus, a amet taciti, erat libero, ut fusce, suspendisse id cras semper auctor arcu. Magna risus mi ipsum urna vestibulum, pulvinar elit et dignissim habitant tellus.",
                    cta:{
                      parentClass:"ibm-ind-link ibm-padding-top-2",
                      class:" ibm-forward-link",
                      text:"Read more",
                      url:"#",
                      target:"_blank",
                      onClick:""
                    }
                  },
                ]

              }
            }
          },
          {
            temp:"products",
            content:{
              class:"ibm-band ibm-padding-top-2",
              headline:"Find out how IBM can help you get started with Blockchain",
              text:"Lorem ipsum dolor sit amet, vestibulum dictumst, quam nam tortor elementum mauris conubia tortor, massa integer dui, libero pellentesque quis malesuada voluptatum.",
              cta:{
                parentClass:"ibm-alternate-background ibm-btn-link ibm-padding-top-2",
                class:" ibm-btn-pri ibm-btn-white",
                text:"Get Started with IBM",
                url:"#",
                target:"_blank",
                onClick:""
              }
            }
          }
        ]
    }
} // index.html home page
