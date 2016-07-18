module.exports = {
  view: "index",
  optional_path: ".html",
  global_navigation: {},
  content: {
      is_index: false,
      pagetitle:'IBM Blockchain Testpage',
      google_site_verification:"",
      meta_description:'Quickly create, deploy, and manage applications that redefine the user experience. Bluemix also provides easy pathways to connect existing applications and backend data to new cloud applications by creating scalable APIs in Java or Node.js with full API lifecycle management.',
      meta_keywords:'apps, applications, apis, java, node.js, lifecycle management, runtimes, containers, messaging, data, services, strongloop, websphere application server',
      canonical:'http://www.ibm.com/blockchain/',
      segment_naming:{
        property:'Product (IBM.com)',
        value:'CF applications'
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
        primaryCategory:'IBMBLUEMIXPRODUCTS',
        pageID:'http://www.ibm.com/cloud-computing/bluemix/application-services/',
        siteID:'BLUEMIX'
      },
      stylesheet:[],
      javascript:["/javascripts/main-v2.js"],
      breadcrumbs:[
        {
          label:'Products',
          url:'javascript: void(0);'
        },
        {
          label:"Application services",
          url:'javascript: void(0);'
        }
      ],
      leadspace:{
          leadspaceimg:"/images/blockchain/leadspace-parallax.jpg",
          parallax: true,
          social:{
            enabled: true
          },
          header: "Application services",
          subhead: "Create, deploy and manage new applications at the speed of the modern enterprise",
          features: {
              enabled: false,
              list:[
                  "Accelerate the pace of innovation",
                  "Take advantage of existing IT",
                  "Build systems that use data to understand, reason and learn"
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
          primary_cta:{
              enabled: true,
              cta:{
                  href:"https://console.ng.bluemix.net/registration/",
                  text: "Get started free",
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
      // end leadspace

      modules:[
        {
                  temp: "featureGridHomeV2"
        },
        {
                  temp: "featureGridTest"
        },
        {
          temp: "bluemixTable"
        },
        {
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
                          subhead:"Featured Use Case",
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
                          subhead:"Featured Use Case",
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
                          subhead:"Featured Use Case",
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
          {
            temp:"ibmCarousel",
            content:{
              class:"ibm-band ibm-padding-top-2 ibm-padding-bottom-2 ibm-center-block",
              background:"",
              headline:"",
              carouselClass:"ibm-columns ibm-carousel__arrows--large ibm-center-block",
              dataHorizontal:true,
              dataDots:true,
              dataArrows:true,
              dataAutoplay:false,
              slides:{
                class:"",
                slide:[
                  {
                    cards:{
                      class:"ibm-col-6-5 ibm-center ibm-center-block",
                      style:"border:none;background-color:transparent;",
                      card:[
                        {
                          pullQuote:{
                            class:"ibm-h2 ibm-textcolor-blue-30",
                            text: "Illum legere disputando at ius, duo vidit facilisi et. An ius sintnoster, mei at lorem adversarium.",
                            source:{
                              class:"ibm-pullquote-source",
                              text: "<strong>First Name Last Name</strong><br>CIO, Massive Global Company"
                          }
                          }

                        }
                      ]
                    }
                  },
                  {
                    cards:{
                      class:"ibm-col-6-5 ibm-center ibm-center-block",
                      style:"border:none;background-color:transparent;",
                      card:[
                        {
                          pullQuote:{
                            class:"ibm-h2 ibm-textcolor-blue-30",
                            text: "Illum legere disputando at ius, duo vidit facilisi et. An ius sintnoster, mei at lorem adversarium.",
                            source:{
                              class:"ibm-pullquote-source",
                              text: "<strong>First Name Last Name</strong><br>CIO, Massive Global Company"
                          }
                          }

                        }
                      ]
                    }
                  },
                  {
                    cards:{
                      class:"ibm-col-6-5 ibm-center ibm-center-block",
                      style:"border:none;background-color:transparent;",
                      card:[
                        {
                          pullQuote:{
                            class:"ibm-h2 ibm-textcolor-blue-30",
                            text: "Illum legere disputando at ius, duo vidit facilisi et. An ius sintnoster, mei at lorem adversarium.",
                            source:{
                              class:"ibm-pullquote-source",
                              text: "<strong>First Name Last Name</strong><br>CIO, Massive Global Company"
                          }
                          }

                        }
                      ]
                    }
                  }
                ]

              }

            }

          },
          {
            temp:"products",
            content:{
              class:"ibm-band ibm-padding-top-2",
              background:"background:#fff;",
              headline:"Experts Blogposts",
              cards:{
                class:"ibm-col-6-2",
                card:[
                  {
                    video:{
                      title:"IBM Joins Linux Foundation to Advance Blockchain Hyperledger",
                      display:"inline",
                      url:"https://www.youtube.com/watch?v=4RRD4Jy6aWw",
                      id:"4RRD4Jy6aWw",
                      type:"youtube",
                      img:"/images/blockchain/ibm-module.jpg",
                      timeStamp:"1.36"
                    },
                    subhead:"Lorem ipsum dolor sit amet",
                    text:"Lorem ipsum dolor sit amet, phasellus lorem risus, a amet taciti, erat libero, ut fusce, suspendisse id cras semper auctor arcu. Magna risus mi ipsum urna vestibulum, pulvinar elit et dignissim habitant tellus.",
                    cta:{
                      parentClass:"ibm-ind-link ibm-padding-top-2",
                      class:" ibm-forward-link",
                      text:"Internal Link",
                      url:"#",
                      target:"_blank",
                      onClick:""
                    }
                  },
                  {
                    image:{
                      src:"/images/blockchain/ibm-module.jpg",
                      alt:"image alt text"
                    },
                    subhead:"Lorem ipsum dolor sit amet",
                    text:"Lorem ipsum dolor sit amet, phasellus lorem risus, a amet taciti, erat libero, ut fusce, suspendisse id cras semper auctor arcu. Magna risus mi ipsum urna vestibulum, pulvinar elit et dignissim habitant tellus.",
                    cta:{
                      parentClass:"ibm-ind-link ibm-padding-top-2",
                      class:" ibm-forward-link",
                      text:"Internal Link",
                      url:"#",
                      target:"_blank",
                      onClick:""
                    }
                  },
                  {
                    image:{
                      src:"/images/blockchain/ibm-module.jpg",
                      alt:"image alt text"
                    },
                    subhead:"Lorem ipsum dolor sit amet",
                    text:"Lorem ipsum dolor sit amet, phasellus lorem risus, a amet taciti, erat libero, ut fusce, suspendisse id cras semper auctor arcu. Magna risus mi ipsum urna vestibulum, pulvinar elit et dignissim habitant tellus.",
                    cta:{
                      parentClass:"ibm-ind-link ibm-padding-top-2",
                      class:" ibm-forward-link",
                      text:"Internal Link",
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
              background:"background:#fff;",
              headline:"Experts Blogposts",
              cards:{
                class:"ibm-col-6-4",
                card:[
                  {
                    video:{
                      title:"IBM Joins Linux Foundation to Advance Blockchain Hyperledger",
                      display:"inline",
                      url:"https://www.youtube.com/watch?v=4RRD4Jy6aWw",
                      id:"4RRD4Jy6aWw",
                      type:"youtube",
                      img:"/images/blockchain/ibm-module.jpg",
                      timeStamp:"1.36"
                    },
                    subhead:"Lorem ipsum dolor sit amet",
                    text:"Lorem ipsum dolor sit amet, phasellus lorem risus, a amet taciti, erat libero, ut fusce, suspendisse id cras semper auctor arcu. Magna risus mi ipsum urna vestibulum, pulvinar elit et dignissim habitant tellus.",
                    cta:{
                      parentClass:"ibm-ind-link ibm-padding-top-2",
                      class:" ibm-forward-link",
                      text:"Internal Link",
                      url:"#",
                      target:"_blank",
                      onClick:""
                    }
                  },
                  {
                    image:{
                      src:"/images/blockchain/ibm-module.jpg",
                      alt:"image alt text"
                    },
                    subhead:"Lorem ipsum dolor sit amet",
                    text:"Lorem ipsum dolor sit amet, phasellus lorem risus, a amet taciti, erat libero, ut fusce, suspendisse id cras semper auctor arcu. Magna risus mi ipsum urna vestibulum, pulvinar elit et dignissim habitant tellus.",
                    cta:{
                      parentClass:"ibm-ind-link ibm-padding-top-2",
                      class:" ibm-forward-link",
                      text:"Internal Link",
                      url:"#",
                      target:"_blank",
                      onClick:""
                    }
                  },
                  {
                    image:{
                      src:"/images/blockchain/ibm-module.jpg",
                      alt:"image alt text"
                    },
                    subhead:"Lorem ipsum dolor sit amet",
                    text:"Lorem ipsum dolor sit amet, phasellus lorem risus, a amet taciti, erat libero, ut fusce, suspendisse id cras semper auctor arcu. Magna risus mi ipsum urna vestibulum, pulvinar elit et dignissim habitant tellus.",
                    cta:{
                      parentClass:"ibm-ind-link ibm-padding-top-2",
                      class:" ibm-forward-link",
                      text:"Internal Link",
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
              background:"background:#fff;",
              headline:"Experts Blogposts",
              cards:{
                class:"ibm-col-6-1",
                card:[
                  {
                    image:{
                      src:"/images/blockchain/ibm-module.jpg",
                      alt:"image alt text"
                    },
                    subhead:"Lorem ipsum dolor sit amet",
                    text:"Lorem ipsum dolor sit amet, phasellus lorem risus, a amet taciti, erat libero, ut fusce, suspendisse id cras semper auctor arcu. Magna risus mi ipsum urna vestibulum, pulvinar elit et dignissim habitant tellus.",
                    cta:{
                      parentClass:"ibm-ind-link ibm-padding-top-2",
                      class:" ibm-forward-link",
                      text:"Internal Link",
                      url:"#",
                      target:"_blank",
                      onClick:""
                    }
                  },
                  {
                    video:{
                      title:"IBM Joins Linux Foundation to Advance Blockchain Hyperledger",
                      display:"inline",
                      url:"https://www.youtube.com/watch?v=4RRD4Jy6aWw",
                      id:"4RRD4Jy6aWw",
                      type:"youtube",
                      img:"/images/blockchain/ibm-module.jpg",
                      timeStamp:"1.36"
                    },
                    subhead:"Lorem ipsum dolor sit amet",
                    text:"Lorem ipsum dolor sit amet, phasellus lorem risus, a amet taciti, erat libero, ut fusce, suspendisse id cras semper auctor arcu. Magna risus mi ipsum urna vestibulum, pulvinar elit et dignissim habitant tellus.",
                    cta:{
                      parentClass:"ibm-ind-link ibm-padding-top-2",
                      class:" ibm-forward-link",
                      text:"Internal Link",
                      url:"#",
                      target:"_blank",
                      onClick:""
                    }
                  },
                  {
                    image:{
                      src:"/images/blockchain/ibm-module.jpg",
                      alt:"image alt text"
                    },
                    subhead:"Lorem ipsum dolor sit amet",
                    text:"Lorem ipsum dolor sit amet, phasellus lorem risus, a amet taciti, erat libero, ut fusce, suspendisse id cras semper auctor arcu. Magna risus mi ipsum urna vestibulum, pulvinar elit et dignissim habitant tellus.",
                    cta:{
                      parentClass:"ibm-ind-link ibm-padding-top-2",
                      class:" ibm-forward-link",
                      text:"Internal Link",
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
              temp:"feature2col",
              content:{
                class:"ibm-band ibm-padding-top-2",
                headline:"",
                text:"",
                cards:[
                  {
                    class:"ibm-col-6-3 ",
                    video:{
                      title:"IBM Joins Linux Foundation to Advance Blockchain Hyperledger",
                      display:"inline",
                      url:"https://www.youtube.com/watch?v=4RRD4Jy6aWw",
                      id:"4RRD4Jy6aWw",
                      type:"youtube",
                      img:"/images/blockchain/ibm-module.jpg",
                      timeStamp:"1.36"
                    },
                  },
                  {
                    class:"ibm-col-6-3 ",
                    subhead:
                      {
                        class:"ibm-h2",
                        text:"IBM Joins Linux Foundation to Advance Blockchain",
                      },
                      text:"50 words Lorem ipsum dolor sit amet vulputate elit eget taciti. Ut mi in inceptos magnis auctor. Sollicitudin eget consectetuer. Neque commodo in. Lorem nunc minim. In eget eget. Malesuada nisl magna. Dictum eu fermentum proin quam nunc. Leo at sit pulvinar vulputate at ut ullamcorper tempus senectus ac amet nisl.",
                  },
            ]

          }
        },
        {
          temp:"featuredTilesVideo",
        content: {
          type:"case-study",
          classes: "ibm-padding-top-0",
          featured: {
            bg: "/cloud-computing/bluemix/images/casestudy-lead-citi.jpg",
            category: "Finance",
            title: "Citi Bank",
            copy: "Citi and IBM align to accelerate digital banking innovation through the Citi Mobile Challenge.<br><span class='ibm-play-link'>Watch video</span >",
            href: "http://www.ibm.com/cloud-computing/bluemix/",
            video:{
              title:"Citi Bank",
              display:"overlay",
              url:"hhttps://youtu.be/VjJ46gJYHoU?t=32m36s",
              id:"VjJ46gJYHoU",
              type:"youtube",
              //img:"/cloud-computing/bluemix/images/video-dataworks.jpg",
              timeStamp:"1:43:46"
            }
          },
          small: [
            {
              classes: "co-tile-full bg-image-cover",
              bg_sm: "/cloud-computing/bluemix/images/casestudy-lead-tangerine.jpg",
              category: "Finance",
              title: "Tangerine",
              copy: "Tangerine’s mobile banking app improves customer experience and gains actionable insights through IBM Bluemix.<br><span class='ibm-play-link'>Watch video</span >",
              href: "http://www.ibm.com/cloud-computing/infrastructure/softlayer/",
              video:{
                title:"Tangerine",
                display:"overlay",
                url:"https://www.youtube.com/watch?v=Q3Umh-F5_6w",
                id:"Q3Umh-F5_6w",
                type:"youtube",
                //img:"/cloud-computing/bluemix/images/video-dataworks.jpg",
                timeStamp:"3:27"
              }
            },
            {
              classes: "co-tile-sm bg-image-cover",
              bg_sm: "/cloud-computing/bluemix/images/casestudy-lead-gamestop.jpg",
              category: "Retail",
              title: "GameStop",
              copy: "GameStop Technology Institute rapidly tests and deploys new apps using IBM Bluemix.<br><span class='ibm-play-link'>Watch video</span >",
              href: "http://www.ibm.com/cloud-computing/built-on-cloud/saas-security",
              video:{
                title:"GameStop",
                display:"overlay",
                url:"https://www.youtube.com/watch?v=NGY9oJ_AmTY",
                id:"NGY9oJ_AmTY",
                type:"youtube",
                //img:"/cloud-computing/bluemix/images/video-dataworks.jpg",
                timeStamp:"2:04"
              }
            },
            {
              classes: "co-tile-sm bg-image-cover",
              bg_sm: "/cloud-computing/bluemix/images/casestudy-lead-silverhook.jpg",
              category: "Retail",
              title: "SilverHook",
              copy: "IBM Bluemix gives Silverhook Powerboats the tools to take Big Data out to sea.<br><span class='ibm-play-link'>Watch video</span >",
              href: "http://www.ibm.com/cloud-computing/built-on-cloud",
              video:{
                title:"SilverHook",
                display:"overlay",
                url:"https://www.youtube.com/watch?v=rpsjxnoNc-U",
                id:"rpsjxnoNc-U",
                type:"youtube",
                //img:"/cloud-computing/bluemix/images/video-dataworks.jpg",
                timeStamp:"3:26"
              }
            }
          ],

        }
      },
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
        temp:"products",
        content:{
          background:"background-color:#fff;",
          class:"ibm-band ibm-padding-top-2",
          headline:"Blockchain fundamentals",
          text:"Blockchain is a peer-to-peer distributed ledger technology that makes and verifies transactions nearly instantaneous—streamlining complex processes, minimizing costs, and reducing the risk of fraud. At its core, the distributed ledger makes it easier to create cost-efficient business networks where virtually anything of value can be tracked and traded without a central point of control. The result is a more transparent, safe and seamless infrastructure that can transform the way businesses and organizations conduct transactions globally.",
          cards:{
            class:"ibm-col-6-4 ibm-center-block",
            card:[
              {
                class:"ibm-card--noborder",
                image:{
                  src:"/images/blockchain/IBM_Blockchain_Whatis_Illustration-01.svg",
                  alt:"image alt text"
                },
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
          headline:"How blockchain can work for you?",
          text:"The applications of blockchain is showing great promise across a broad range of business applications, including IoT networks, gaming, multi-media rights management, car rental, government proof of identity (or license) creation and insurance record management.<br><br>For example, in the financial industry, blockchain allows securities to be settled in minutes instead of days. It can also be used to help businesses manage the flow of goods and related payments, or enable manufacturers to share production logs with OEMs and regulators to reduce product recalls.",
          cards:{
            class:"ibm-col-6-4 ibm-center-block ibm-card--noborder",
            card:[
              {
                class:"ibm-card--noborder",
                image:{
                  src:"/images/blockchain/IBM_Blockchain_Whatis_Illustration-02.svg",
                  alt:"image alt text"
                },
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
          headline:"The IBM Approach to Blockchain",
          text:"IBM offers secure and scalable technology platforms, deep industry expertise, and a proven engagement model to help clients build successful blockchain solutions. IBM is also a premier member of Linux Foundation’s Hyperledger Project, a cross-enterprise collaborative effort to create a blockchain for business.",
        }
      },
    ]// end modules

  }// end Main content



}
