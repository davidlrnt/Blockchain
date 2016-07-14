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
      stylesheet:["/stylesheets/animate.css"],
      javascript:["/javascripts/main-v2.js","/javascripts/wow.min.js"
      ],
      breadcrumbsEnabled: false,
      breadcrumbsClass:"ibm-textcolor-white-core",
      breadcrumbs:[{
                    label:'Overview',
                    url:'javascript: void(0);'
                  },
              ],
      leadspace:{
          parallax: false,
          leadspaceimg: "/images/blockchain/home-hero.jpg",
          social:{
            enabled: false
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
          header: "Transforming your business networks with blockchain",
          subhead: "Transaction driven transformation",
          paragraph: "IBM Blockchain empowers businesses to move assets through a highly-secure,<br>shared and replicated ledger.",
          primary_cta:{
              enabled: true,
              cta:{
                  href:"/blockchain/for-business",
                  text: "Change the way you do business",
                  onClick:""
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
          temp:"homeDevelopers"
        },
        {
          temp: "featureGridHome"
        },
          {
            temp:"products",
            content:{
              class:"home-whats-new-section ibm-band ibm-padding-top-2",
              background:"",
              headline:{
                class:"ibm-h2 ibm-textcolor-gray-50",
                text:"See what's new with IBM Blockchain"},
              cards:{
                class:"ibm-col-4-1",
                style:"background-color:transparent;",
                card:[
                  {
                    class:"home-whats-new-first ",
                    subhead:{
                      class:" ibm-h3 ibm-light ibm-textcolor-gray-50 ",
                      text:"The Hyperledger Project: IBM joins Linux Foundation to help advance blockchain"},
                    //text:"See how IBM launched Blockchain services for clients across a range of industries including Financial Services, Government, and Healthcare on IBM Cloud and empowered developers to run Blockchain using Docker containers.",
                    cta:{
                      parentClass:"ibm-ind-link ibm-padding-top-2",
                      class:" ibm-forward-link ibm-video-placeholder",
                      text:"Watch video",
                      url:"https://youtu.be/4RRD4Jy6aWw",
                      target:"",
                      onClick:"",
                      video:{
                        display:"overlay",
                        url:"https://youtu.be/4RRD4Jy6aWw",
                        id:"4RRD4Jy6aWw",
                        type:"youtube",
                      },
                    }
                  },
                  {
                    subhead:{
                      class:" ibm-h3 ibm-light ibm-textcolor-gray-50",
                      text:"IBM launches first highly secure Blockchain Services across multiple industries"
                    },
                    //text:"IBM teamed up with Japan Exchange Group to announce that they are testing the potential of Blockchain technology for use in trading in low transaction markets.",
                    cta:{
                      parentClass:"ibm-ind-link ibm-padding-top-2",
                      class:" ibm-external-link",
                      text:"Read more",
                      url:"https://www-03.ibm.com/press/us/en/pressrelease/49632.wss",
                      target:"_blank",
                      onClick:"trackOutboundLink('https://www-03.ibm.com/press/us/en/pressrelease/49632.wss'); return false;"
                    }
                  },
                  {
                    subhead:{
                      class:" ibm-h3 ibm-light ibm-textcolor-gray-50",
                      text:"IBM tests Blockchain for trading with the Japan Exchange Group"
                    },
                    //text:"To help developers quickly explore the use of Blockchain for the enterprise, IBM has made nearly 44,000 lines of code available to the Linux Foundation’s open source Hyperledger Project.",
                    cta:{
                      parentClass:"ibm-ind-link ibm-padding-top-2",
                      class:" ibm-external-link",
                      text:"Read more",
                      url:"https://www-03.ibm.com/press/us/en/pressrelease/49088.wss",
                      target:"_blank",
                      onClick:"trackOutboundLink('https://www-03.ibm.com/press/us/en/pressrelease/49088.wss'); return false;"
                    }
                  },
                  {
                    subhead:{
                      class:" ibm-h3 ibm-light ibm-textcolor-gray-50",
                      text:"IBM makes blockchain available to developers"
                    },
                    //text:"To help developers quickly explore the use of Blockchain for the enterprise, IBM has made nearly 44,000 lines of code available to the Linux Foundation’s open source Hyperledger Project.",
                    cta:{
                      parentClass:"ibm-ind-link ibm-padding-top-2",
                      class:" ibm-external-link",
                      text:"Read more",
                      url:"https://www-03.ibm.com/press/us/en/pressrelease/49029.wss",
                      target:"_blank",
                      onClick:"trackOutboundLink('https://www-03.ibm.com/press/us/en/pressrelease/49029.wss'); return false;"
                    }
                  },
                ]

              }
            }
          },
          // {
          //     temp:"feature2col",
          //     content:{
          //       class:"ibm-band ibm-padding-top-2 ibm-background-blue-40 ibm-alternate-background",
          //       background:"background: #FFFFFF url(/images/blockchain/home-launching-section-bg.png) center center no-repeat; background-size:cover;",
          //       headline:{class:"ibm-h2 ibm-light", text:"Launching IBM Blockchain"},
          //       setsameheight:{
          //         class:".ibm-col-6-3",
          //       },
          //       cards:[
          //           {
          //             class:"ibm-col-6-3 ",
          //             mediaObject:{
          //              image:{
          //                src:"/images/blockchain/home-contact-now.png",
          //                alt:"IBM Blockchain contact now",
          //                style:"width:78px;"
          //              },
          //              subhead:{class:"ibm-h4 ibm-padding-bottom-1",text:"Contact an expert"},
          //              text:{class:"ibm-light", text:"Talk to someone about what blockchain can do for your business."},
          //              cta:{
          //                parentClass:"ibm-button-link ibm-padding-top-1",
          //                class:" ibm-btn-sec ibm-btn-white",
          //                text:"Contact now",
          //                url:"#",
          //                target:"_blank",
          //                onClick:""
          //              }
          //            },
          //           },
          //           {
          //             class:"ibm-col-6-3 ",
          //             mediaObject:{
          //              image:{
          //                src:"/images/blockchain/home-get-started-now.png",
          //                alt:"IBM Blockchain get started now",
          //                style:"width:78px;"
          //              },
          //              subhead:{class:"ibm-h4 ibm-padding-bottom-1",text:"Get started with code"},
          //              text:{class:"ibm-light",
          //                text:"Ready to jump in? Learn how to set up a blockchain network as well as applications that can take advantage of it's capabilities."},
          //              cta:{
          //                parentClass:"ibm-button-link ibm-padding-top-1",
          //                class:" ibm-btn-sec ibm-btn-white",
          //                text:"Get started now",
          //                url:"#",
          //                target:"_blank",
          //                onClick:""
          //              }
          //
          //            },
          //           },
          //       ]
          //     }
          // },
          // {
          //   temp:"products",
          //   content:{
          //     class:"ibm-band ibm-padding-top-2 ibm-background-blue-40 ibm-alternate-background",
          //     background:"background: #FFFFFF url(/images/blockchain/home-launching-section-bg.png) center center no-repeat; background-size:cover;",
          //     headline:{class:"ibm-h2 ibm-light", text:"Launching IBM Blockchain"},
          //     setsameheight:{
          //       class:".ibm-col-6-3",
          //     },
          //     cards:{
          //       class:"ibm-col-6-3",
          //       style:"background-color:transparent;",
          //       card:[
          //         {
          //           class:" ibm-card--noborder",
          //           subhead:{class:"ibm-h4 ibm-textcolor-white-core ibm-padding-bottom-1",text:"Contact an expert"},
          //           text:{class:"ibm-light ibm-textcolor-white-core", text:"Talk to someone about what blockchain can do for your business."},
          //           cta:{
          //             parentClass:"ibm-button-link ibm-padding-top-1",
          //             class:" ibm-btn-sec ibm-btn-white",
          //             text:"Contact now",
          //             url:"#",
          //             target:"_blank",
          //             onClick:""
          //           }
          //         },
          //         {
          //           class:" ibm-card--noborder",
          //           subhead:{class:"ibm-h4  ibm-textcolor-white-core ibm-padding-bottom-1",text:"Get started with code"},
          //           text:{class:"ibm-light ibm-textcolor-white-core",
          //             text:"Ready to jump in? Learn how to set up a blockchain network as well as applications that can take advantage of it's capabilities."},
          //           cta:{
          //             parentClass:"ibm-button-link ibm-padding-top-1",
          //             class:" ibm-btn-sec ibm-btn-white",
          //             text:"Get started now",
          //             url:"#",
          //             target:"_blank",
          //             onClick:""
          //           }
          //         },
          //       ]
          //
          //     }
          //   }
          // },
          {temp:"launchingBlockchain"}
        ]
    }
} // index.html home page
