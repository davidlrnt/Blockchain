module.exports = {
    view: "index",
    optional_path: ".html",
    global_navigation: {},
    content:{
      is_index: true,
      google_site_verification:"",
      pagetitle:'IBM Blockchain Getting Started',
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
      stylesheet:["http://1.www.s81c.com/common/v18/css/grid-fluid.css"],
      javascript:[
      ],
      breadcrumbsEnabled: false,
      breadcrumbsClass:"ibm-textcolor-white-core",
      breadcrumbs:[{
                    label:'Blockchain for business',
                    url:'javascript: void(0);'
                  },
              ],
      leadspace:{
        class:"ibm-alternate-background",
          leadspaceimg:"/images/blockchain/IBM_Blockchain_GettingStarted_hero.png",
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
          header: "Build a blockchain application and put it to work for your business",
          paragraph: "Evolve your transactions to become simpler and more secure, whether they are with someone next door or across an international border.",
          primary_cta:{
              enabled: false,
              cta:{
                  href:"##__ReplaceMe__##",
                  text: "Get started on Bluemix",
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
        {temp: "gettingStartedChainCode"},
        {temp: "gettingStartedDevelopers"},
        {
          temp:"products",
          content:{
            class:"getting-started-resources-section ibm-band ibm-padding-top-2 ibm-alternate-background ibm-background-green-40",
            headline:{
              class:"ibm-h2",
              text:"Get started with Blockchain",
            },
            text:{
              text:"3 ways IBM helps your business get started with blockchain"
            }
          }
        },
          {
            temp:"products",
            content:{
              class:"getting-started-resources-section ibm-band ibm-background-white-core",
              background:"padding-bottom:0;border-bottom:solid 1px #cccccc;",
              cards:{
                class:"ibm-col-6-2  ibm-col-large-6-3 ibm-col-medium-1-1 ibm-padding-top-2",
                style:"background-color:transparent;",
                card:[
                  {
                    class:" ",
                    mediaObject:{
                           image:{
                             src:"/images/blockchain/getting-started-resource-1.png",
                             alt:"First Blockchain app",
                             style:"width:30px;"
                           },
                           subhead:"<strong>Builid your first blockchain application</strong>",
                         },
                    text:{class:"ibm-h4",text:"IBM offers a variety of technical and consulting services to help take your product from idea to execution."},
                    cta:{
                      parentClass:"ibm-button-link ibm-padding-top-2",
                      class:" ibm-btn-sec",
                      text:"Get started on Bluemix",
                      url:"##__ReplaceMe__##",
                      target:"_blank",
                      onClick:"##__ReplaceMe__##"
                    }
                  },
                  {
                    class:" ",
                    mediaObject:{
                           image:{
                             src:"/images/blockchain/getting-started-resource-2.png",
                             alt:"DeveloperWorks",
                             style:"width:30px;"
                           },
                           subhead:"<strong>developerWorks</strong>",
                         },
                    text:{class:"ibm-h4",text:"Get started building with IBM Blockchain:"},
                    list:{
                      style:"",
                      items:[
                      {
                        text: "Tap into a community of other developers",
                      },
                      {
                        text: "Learn how to build a block network",
                      },
                      {
                        text: "Access a deep repository of tutorials and sample code",
                      },

                    ]},
                    cta:{
                      parentClass:"ibm-button-link ibm-padding-top-2",
                      class:" ibm-btn-sec",
                      text:"Explore developerWorks",
                      url:"##__ReplaceMe__##",
                      target:"_blank",
                      onClick:"##__ReplaceMe__##"
                    }
                  },
                  {
                    mediaObject:{
                           image:{
                             src:"/images/blockchain/getting-started-resource-3.png",
                             alt:"IBM Blockchain and z Systems",
                             style:"width:30px;"
                           },
                           subhead:"<strong>IBM Blockchain and z Systems</strong>",
                    },
                    text:{class:"ibm-h4 ",text:"Leverage your existing infrastructure with LinuxONE and Z Systems:"},
                    list:{
                      style:"",
                      items:[
                      {
                        text: "Cryptography",
                      },
                      {
                        text: "Security",
                      },
                      {
                        text: "Reliability",
                      },

                    ]},
                    cta:{
                      parentClass:"ibm-button-link ibm-padding-top-2",
                      class:" ibm-btn-sec",
                      text:"Learn more",
                      url:"##__ReplaceMe__##",
                      target:"_blank",
                      onClick:"##__ReplaceMe__##"
                    }
                  },

                ]

              }
            }
          },
          //{temp: "gridGettingStartedBlockchain"},
          {

              temp:"products",
              content:{
                class:"ibm-band ibm-padding-top-2 ibm-background-white-core",
                background:"",
                headline:{
                  class:"ibm-h2 ",
                  text:"Explore IBM Blockchain instances"
                },
                cards:{
                  class:"ibm-col-6-2",
                  card:[
                    {
                      video:{
                        title:"IBM Joins Linux Foundation to Advance Blockchain Hyperledger",
                        display:"inline",
                        url:"https://www.youtube.com/watch?v=B2eYh2Y7rJw",
                        id:"B2eYh2Y7rJw",
                        type:"youtube",
                        img:"/images/blockchain/getting-started-instance-1.png",
                      },
                      subhead:"Commercial paper app on Blockchain",
                      text:"See how a commercial paper trading network can be implemented with a blockchain network.",
                      ctagroup:{
                        class:"ibm-ind-link ",
                        cta:[
                          {
                            parentClass:"ibm-ind-link ibm-padding-top-2",
                            class:" ibm-external-link",
                            text:"Get the code",
                            url:"https://github.com/IBM-Blockchain/cp-web#readme",
                            target:"_blank",
                            onClick:"trackOutboundLink('https://github.com/IBM-Blockchain/cp-web#readme'); return false;"
                          },
                          {
                            parentClass:"ibm-ind-link ibm-padding-top-2",
                            class:" ibm-external-link",
                            text:"Deploy to Bluemix",
                            url:"https://bluemix.net/deploy?repository=https://github.com/IBM-Blockchain/cp-web.git",
                            target:"_blank",
                            onClick:"trackOutboundLink('https://bluemix.net/deploy?repository=https://github.com/IBM-Blockchain/cp-web.git'); return false;"
                          },
                        ]
                      }
                    },
                    {
                      video:{
                        title:"IBM Joins Linux Foundation to Advance Blockchain Hyperledger",
                        display:"inline",
                        url:"https://youtu.be/IgNfoQQ5Reg",
                        id:"IgNfoQQ5Reg",
                        type:"youtube",
                        img:"/images/blockchain/getting-started-instance-2.png",
                      },
                      subhead:"Car lease demo",
                      text:"Watch a sample supply chain process between multiple parties using IBM Blockchain",
                      ctagroup:{
                        class:"ibm-ind-link ",
                        cta:[
                          {
                            parentClass:"ibm-ind-link ibm-padding-top-2",
                            class:" ibm-external-link",
                            text:"Get the code",
                            url:"https://github.com/IBM-Blockchain/car-lease-demo",
                            target:"_blank",
                            onClick:"trackOutboundLink('https://github.com/IBM-Blockchain/car-lease-demo'); return false;"
                          },
                          {
                            parentClass:"ibm-ind-link ibm-padding-top-2",
                            class:" ibm-external-link",
                            text:"Deploy to Bluemix",
                            url:"https://bluemix.net/deploy?repository=https://github.com/IBM-Blockchain/car-lease-demo.git",
                            target:"_blank",
                            onClick:"trackOutboundLink('https://bluemix.net/deploy?repository=https://github.com/IBM-Blockchain/car-lease-demo.git'); return false;"
                          },
                        ]
                      }
                      },
                    {
                      image:{
                        src:"/images/blockchain/getting-started-instance-3.png",
                        alt:"image alt text"
                      },
                      subhead:"Marbles sample application",
                      text:"Explore how your business can make a simple asset transcation with a blockchain network.",
                      ctagroup:{
                        class:"ibm-ind-link ",
                        cta:[
                          {
                            parentClass:"ibm-ind-link ibm-padding-top-2",
                            class:" ibm-external-link",
                            text:"Get the code",
                            url:"https://github.com/IBM-Blockchain/marbles",
                            target:"_blank",
                            onClick:"trackOutboundLink('https://github.com/IBM-Blockchain/marbles'); return false;"
                          },
                          {
                            parentClass:"ibm-ind-link ibm-padding-top-2",
                            class:" ibm-external-link",
                            text:"Deploy to Bluemix",
                            url:"https://bluemix.net/deploy?repository=https://github.com/ibm-blockchain/marbles.git",
                            target:"_blank",
                            onClick:"trackOutboundLink('https://bluemix.net/deploy?repository=https://github.com/ibm-blockchain/marbles.git'); return false;"
                          },
                        ]
                      }
                    },
                  ]
                }
              }
            }
        ]
    }
} // for business page
