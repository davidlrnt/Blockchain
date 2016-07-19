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
    leadspaceimg:"/images/blockchain/IBM_Blockchain_BlockchainBasics_Hero.jpg",
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
    header: "IBM and the Hyperledger Project: a shared vision",
    subhead: "Blockchain enables businesses to transact around the globe faster than ever before.",
    class: "ibm-textcolor-white-core",
    paragraph: "Blockchain enables businesses to transact around the globe faster than ever before.",
    primary_cta:{
        enabled: false,
        cta:{
            href:"#",
            text: "Get started",
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
            text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maiores fuga eos minus at ipsam? In, atque, modi. Perspiciatis doloribus suscipit, iste nesciunt officia commodi, ipsam dolores? Inventore, doloremque, nisi! Laboriosam, eum rem veniam earum. Enim, eos itaque. Laudantium fuga, molestias nesciunt reprehenderit dolor aliquam accusamus maxime at voluptatem, maiores illum, aperiam tempora perspiciatis ab dolore. Et ut aperiam vero!",
          }
        ]

        }
      },
      {
        temp:"feature2col",
        content:{
          class:"ibm-band ibm-padding-top-2",
          background:"background: #FFFFFF url(/images/blockchain/Whatis-work-bg.png) center center no-repeat; background-size:cover;",
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
              cta:{
                parentClass:"ibm-button-link ibm-padding-top-1",
                class:" ibm-btn-sec ibm-video-placeholder",
                text:"Learn more about the Hyperledger Project",
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
          ]
        }
      },
      {
        temp:"products",
        content:{
          class:"ibm-band ibm-padding-top-2",
          background:"",
          headline:{class:"ibm-h2 ibm-bold" ,text:"Discover how blockchain works at the most fundamental level"},
          text:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque recusandae enim laudantium quaerat quidem accusantium, blanditiis, non inventore sapiente labore quis. Eos, doloremque iure omnis necessitatibus enim impedit ipsam, repudiandae.",
          cards:{
            class:"ibm-col-6-2",
            card:[
              {
                class:"ibm-center ibm-padding-top-2",
                image:{
                  style:"width:100px;",
                  src:"/images/blockchain/Whatis-c1-code.png",
                  alt:"Code"
                },
                text:{class:"ibm-textcolor-gray-50", text:"Open source code built from the ground up. The Linux Foundation's Hyperledger Project has over 50 members and growing."},
              },
              {
                class:"ibm-center ibm-padding-top-2",
                image:{
                  style:"width:100px;",
                  src:"/images/blockchain/Whatis-c2-cloud.png",
                  alt:"Cloud"
                },
                text:{class:"ibm-textcolor-gray-50", text:"Value-added services on Bluemix and SoftLayer cover critical business areas such as, high-availability, compliance, security, performance, and more."},
              },
              {
                class:"ibm-center  ibm-padding-top-2",
                image:{
                  style:"width:100px;",
                  src:"/images/blockchain/Whatis-c3-client.png",
                  alt:"Client"
                },
                text:{class:"ibm-textcolor-gray-50", text:"Hands on engagement model led by the IBM Bluemix Garage for blockchain, helps build use cases to solve business problems with blockchain technology."},
              },
            ]
          }
        }
      },
      {
        temp: "bluemixTable"
      },
      {temp:"launchingBlockchain"}
    ]
  }
}
