module.exports = {
  view: "index",
  optional_path: ".html",
  global_navigation: {},
  content:{
    is_index: true,
    google_site_verification:"",
    pagetitle:'IBM Blockchain Basics',
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
  javascript:[],
  breadcrumbsEnabled: false,
  breadcrumbsClass:"ibm-textcolor-white-core",
  breadcrumbs:[{
    label:'Blockchain Basics',
    url:'javascript: void(0);'
  }],
  leadspace:{
    leadspaceimg:"/images/blockchain/IBM_Blockchain_HyperledgerHero.jpg",
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
    header: "Establishing an open standard for blockchain",
    subhead: "",
    class: "ibm-textcolor-white-core",
    paragraph: "Linux Foundation's Hyperledger Project drives adoption of blockchain across multiple industries",
    primary_cta:{
        enabled: false,
        cta:{
            href:"#",
            text: "Get started",
            onClick:"trackOutboundLink('https://www.hyperledger.org'); return false;"
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
        class:"ibm-band ibm-padding-top-2",
        headline:"",
        text:"",
        cards:[
          {
            class:"ibm-col-6-3 ibm-center",
            image:{
            	style: "width: 70%",
              src:"/images/blockchain/Whatis-hyperledger.png",
              alt:"image alt text"
            },
          },
          {
            class:"ibm-col-6-3 ",
            text: "IBM contributed the Hyperledger Fabric to the highly collaborative Hyperledger Project. The project was founded to drive the robust and efficient open standards for blockchain necessary to achieve mainstream commercial adoption. Blockchain is poised to reduce cost, time and risk in business transactions and have a tranformative impact on business around the globe.",
            cta:{
                parentClass:"ibm-button-link ibm-padding-top-1",
                class:" ibm-btn-sec ibm-video-placeholder",
                text:"Learn more about the Hyperledger Project",
                target:"",
                onClick: "trackOutboundLink('https://www.hyperledger.org'); return false;"
              }
          }

        ]

        }
      },
      {
        temp:"feature2col",
        content:{
          class:"ibm-band ibm-padding-top-2 ibm-textcolor-white-core",
          background:"background: #FFFFFF url(/images/blockchain/hyperledger-video-container.png) center center no-repeat; background-size:cover;",
          headline:"",
          text:"",
          cards:[
            {
              class:"ibm-col-6-3",
              background:"padding: 0 20px;box-sizing: border-box;",
              video:{
                title:"IBM Joins Linux Foundation to Advance Blockchain Hyperledger",
                display:"inline",
                url:"https://www.youtube.com/watch?v=4RRD4Jy6aWw",
                id:"4RRD4Jy6aWw",
                type:"youtube",
                img:"/images/blockchain/Whatis-3min-video.png",
              },
            },
            {
              class:"ibm-col-6-3 ",
              background:"padding: 0 20px;box-sizing: border-box;",
              pullQuote:{
                  class:"",
                  text: "As with any early-stage, highly-complex technology that demonstrates the ability to change the way we live our lives and conduct business, blockchain demands a cross-industry, open source collaboration to advance the technology for all.",
                  source:{
                    class:"",
                    text: "&mdash; Jim Zemlin, Executive Director, Linux Foundation"
                  }
                },
              
            },
          ]
        }
      },
      {
        temp:"products",
        content:{
          class:"ibm-band ibm-padding-top-2",
          background:"",
          headline:{class:"ibm-h2" ,text:"Discover what separates the Hyperledger Fabric <br /> from other blockchain protocols"},
          text: "Blockchain technology is poised to transform business transactions. <br /> Three key benefits of the Hyperledger Fabric:",
          cards:{
            class:"ibm-col-6-2",
            card:[
              {
                class:"ibm-center ibm-padding-top-2",
                image:{
                  style:"width:100px;",
                  src:"/images/blockchain/hyperledger-network-logo.png",
                  alt:"Code"
                },
                subhead:{class:"ibm-h3 ibm-textcolor-gray-50", text:"Permissioned network"},
                text:{class:"ibm-textcolor-gray-50", text:"Allow access to only those you give permission to."},
              },
              {
                class:"ibm-center ibm-padding-top-2",
                image:{
                  style:"width:100px;",
                  src:"/images/blockchain/hyperledger-confidential-logo.png",
                  alt:"Cloud"
                },
                subhead:{class:"ibm-h3 ibm-textcolor-gray-50", text:"Confidential transactions"},
                text:{class:"ibm-textcolor-gray-50", text:"Gives businesses the flexibility and security to make transactions that are only seen by parties with the correct encryption keys."},
              },
              {
                class:"ibm-center  ibm-padding-top-2",
                image:{
                  style:"width:100px;",
                  src:"/images/blockchain/hyperledger-crypto-logo.png",
                  alt:"Client"
                },
                subhead:{class:"ibm-h3 ibm-textcolor-gray-50", text:"No cryptocurrency"},
                text:{class:"ibm-textcolor-gray-50", text:"Requires less processing time that will slow down transactions."},
              },
            ]
          }
        }
      },
      {
        temp: "bluemixTable"
      },
      {
        temp:"products",
        content:{
          class:"home-whats-new-section ibm-band ibm-padding-top-2 ",
          background:"",
          headline:{
            class:"ibm-h2",
            text:"Additional Resources"},
          cards:{
            class:"ibm-col-4-1",
            style:"background-color:transparent;",
            card:[
              {
                class:"home-whats-new-first ",
                subhead:{
                  class:"ibm-bold ",
                  text:"Access Hyperledger Fabric protocol specs on GitHub"
                },
                cta:{
                  parentClass:"ibm-ind-link ",
                  class:"ibm-external-link",
                  text:"Learn more",
                  url:"https://github.com/hyperledger/fabric/blob/master/docs/protocol-spec.md",
                  target:"",
                  onClick:"trackOutboundLink('https://github.com/hyperledger/fabric/blob/master/docs/protocol-spec.md'); return false;"
                }
              },
              {
                subhead:{
                  class:"ibm-bold",
                  text:"Explore the Hyperledger Project on Github"
                },
                cta:{
                  parentClass:"ibm-ind-link ",
                  class:"ibm-external-link",
                  text:"See the code",
                  url:"https://github.com/hyperledger",
                  target:"_blank",
                  onClick:"trackOutboundLink('https://github.com/hyperledger'); return false;"
                }
              },
              {
                subhead:{
                  class:"ibm-bold",
                  text:"View Hyperledger Fabric Documentation"
                },
                cta:{
                  parentClass:"ibm-ind-link ",
                  class:"ibm-external-link",
                  text:"Learn more",
                  url:"https://github.com/hyperledger",
                  target:"_blank",
                  onClick:"trackOutboundLink('https://github.com/hyperledger'); return false;"
                }
              },
              {
                subhead:{
                  class:"ibm-bold",
                  text:"Join the Hyperledger Project community on Slack"
                },
                cta:{
                  parentClass:"ibm-ind-link ",
                  class:"ibm-external-link",
                  text:"Contribute now",
                  url:"https://hyperledger.slack.com/",
                  target:"_blank",
                  onClick:"trackOutboundLink('https://hyperledger.slack.com/'); return false;"
                }
              },
            ]

          }
        }
      },
      {temp:"launchBlockchain"}
    ]
  }
}
