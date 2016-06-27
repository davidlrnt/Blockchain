module.exports = {
    view: "index",
    optional_path: ".html",
    global_navigation: {},
    content:{
      is_index: false,
      google_site_verification:"",
      pagetitle:'IBM Blockchain for Business',
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
                    label:'Blockchain for business',
                    url:'javascript: void(0);'
                  },
              ],
      leadspace:{
          leadspaceimg:"",
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
          header: "What is IBM Blockchain for Enterprise",
          subhead: "Lorem ipsum dolor sit amet, vestibulum dictumst, quam nam tortor elementum mauris conubia tortor, massa integer dui, libero pellentesque quis malesuada voluptatum. Metus vitae placerat elit, magna fusce, bibendum sed imperdiet pharetra aenean suspendisse, leo ridiculus, nunc dui rutrum ut tempus non.",
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
            temp:"products",
            content:{
              class:"ibm-band ibm-padding-top-2 ibm-padding-bottom-2",
              background:"background: #00b0d9;",
              headline:"",
              cards:{
                class:"ibm-col-6-4 ibm-textcolor-white-core ibm-alternate-background",
                style:"border:none;background-color:transparent;",
                card:[
                    {
                    eyebrowInCardContent:{
                      text:"Featured Content",
                      class:"ibm-h5 ibm-textcolor-black-core"
                    },
                    subhead:"Applying blockchain to business",
                    text:"50 words Lorem ipsum dolor sit amet vulputate elit eget taciti. Ut mi in inceptos magnis auctor. Sollicitudin eget consectetuer. Neque commodo in. Lorem nunc minim. In eget eget. Malesuada nisl magna. Dictum eu fermentum proin quam nunc. Leo at sit pulvinar vulputate at ut ullamcorper tempus senectus ac amet nisl.",
                    cta:{
                      parentClass:"ibm-btn-link ibm-padding-top-1",
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

          },
          {
            temp: "featureGridForBusiness"
          },
          {
            temp:"products",
            content:{
              class:"ibm-band ibm-padding-top-2       ibm-center-block",
              background:"",
              headline:"",
              cards:{
                class:"ibm-col-6-5 ibm-center ibm-center-block",
                style:"border:none;background-color:transparent;",
                card:[
                  {
                    pullQuote:{
                      class:"ibm-h2 ibm-textcolor-blue-30",
                      text: "50 words Lorem ipsum dolor sit amet vulputate elit eget taciti. Ut mi in inceptos magnis auctor. Sollicitudin eget consectetuer. Neque commodo in. Lorem nunc minim. In eget eget. Malesuada nisl magna. Dictum eu fermentum proin quam nunc. Leo at sit pulvinar vulputate at ut ullamcorper tempus senectus ac amet nisl.",
                      source:{
                        class:"ibm-pullquote-source",
                        text: "<strong>First Name Last Name</strong><br>CIO, Massive Global Company"
                      }
                    }
                  }
                ]
              }
            }
          },
          {
            temp:"products",
            content:{
              background:"background-color:#fff;",
              class:"ibm-band ibm-padding-top-2",
              headline:"Blockchain Suitability",
              text:"25 words Lorem ipsum dolor. Sit amet pede. Ipsum nam mauris. Morbi in sit augue risus sem nam est scelerisque. Explicabo vel luctus sodales quis ipsum et.",
              cards:{
                class:"ibm-col-6-4 ibm-center-block",
                card:[
                  {
                    image:{
                      src:"/images/blockchain/fpo.svg",
                      alt:"image alt text"
                    },
                  }
                ]
              }
            }
          },

          {
            temp:"feature2col",
            content:{
              class:"ibm-band ibm-padding-top-2",
              background:"background:#4178BE;",
              headline:"",
              text:"",
              cards:[
                {
                  class:"ibm-col-6-4 ibm-left",
                  subhead:
                    {
                      class:" ibm-h1 ibm-textcolor-white-core",
                      text:"Get started with Blockchain Services",
                    }
                },
                {
                  class:"ibm-col-6-2 ibm-right",
                  cta:
                    {
                      parentClass:"ibm-alternate-background ibm-btn-link ibm-padding-top-bc-15",
                      class:" ibm-btn-pri ibm-btn-white",
                      text:"Get started",
                      url:"#",
                      target:"_blank",
                      onClick:""
                    }
                },
              ]

            }
          }
        ]
    }
} // for business page
