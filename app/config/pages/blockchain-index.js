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
                  href:"##_REPLACE_ME_##",
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
            temp:"feature2col",
            content:{
              class:"ibm-band ibm-padding-top-3 ibm-padding-bottom-3 home-developers-section",
              background:"background: #FFFFFF url(/images/blockchain/home-developers-band-bg.png) right 0 no-repeat; background-size:auto 100%;",
              headline:"",
              setsameheight:{
                class:".ibm-col-6-3",
              },
              cards:[
                  {
                    class:"ibm-col-6-3 ",
                    imagetop:{
                      style:"width:40px;height:40px;",
                      src:"/images/blockchain/Bluemix-logo.png",
                      alt:"Bluemix logo"
                    },
                    subhead:"<strong>Developers: Try out IBM Blockchain on a test network for free</strong>",
                    text:"IBM Blockchain gives developers a wide variety of options to choose from when building a high security business network (HSBN.) Options range from simple and basic to more advanced.",
                    cta:{
                      parentClass:"ibm-button-link ibm-padding-top-1",
                      class:" ibm-btn-sec",
                      text:"Try out IBM Blockchain now",
                      url:"#",
                      target:"_blank",
                      onClick:""
                    }
                  },
                  {
                    class:"ibm-col-6-3 developers-col-2",
                    background:"box-sizing:border-box;padding:50px 0 0 80px;background: #FFFFFF url(/images/blockchain/home-developers-card-bg.jpg) center center no-repeat; background-size:cover;",
                    subhead:{
                      text:"Here are a few examples:",
                      class:"ibm-textcolor-white-core"
                    },
                    list:[
                      {
                        text: "Hyperledger Fabric source code",
                        class:"ibm-textcolor-white-core"
                      },
                      {
                        text: "IBM Blockchain on Bluemix",
                        class:"ibm-textcolor-white-core"
                      },
                      {
                        text: "Docker images deployed to IBM<br>Cloud and z System mainframes",
                        class:"ibm-textcolor-white-core"
                      },
                    ],
                  },
              ]
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
                    subhead:"IBM launches first highly secure Blockchain Services across multiple industries",
                    text:"See how IBM launched Blockchain services for clients across a range of industries including Financial Services, Government, and Healthcare on IBM Cloud and empowered developers to run Blockchain using Docker containers.",
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
                    subhead:"IBM tests Blockchain for trading with the Japan Exchange Group",
                    text:"IBM teamed up with Japan Exchange Group to announce that they are testing the potential of Blockchain technology for use in trading in low transaction markets.",
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
                    subhead:"IBM makes Blockchain-as-a-Service available to developers",
                    text:"To help developers quickly explore the use of Blockchain for the enterprise, IBM has made nearly 44,000 lines of code available to the Linux Foundation’s open source Hyperledger Project.",
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
              class:"ibm-band ibm-padding-top-2 ibm-background-green-core",
              headline:"Get started with IBM Blockchain",
              cta:{
                parentClass:"ibm-alternate-background ibm-btn-link ibm-padding-top-2",
                class:" ibm-btn-pri ibm-btn-white",
                text:"See how IBM can help",
                url:"#",
                target:"_blank",
                onClick:""
              }
            }
          }
        ]
    }
} // index.html home page
