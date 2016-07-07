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
          leadspaceimg: "/images/blockchain/IBM_Blockchain_Homepage_Hero.jpg",
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
          header: "Experience IBM Blockchain",
          subhead: "Transaction driven transformation",
          paragraph: "IBM Blockchain empowers businesses to move assets and capital securely around the globe in the blink of an eye. It's shared ledger -- open to known members only -- sits on a permissioned network making all transactions fast, secure and confidential.",
          primary_cta:{
              enabled: true,
              cta:{
                  href:"##_REPLACE_ME_##",
                  text: "Explore IBM Blockchain",
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
          temp:"products",
          content:{
            class:"ibm-band ibm-padding-top-2",
            headline:"IBM Blockchain in application",
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
