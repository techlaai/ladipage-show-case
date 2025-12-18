// ==========================================
// TECHLA AI - LANGUAGE TRANSLATIONS
// Multi-language support (English / Vietnamese)
// ==========================================

const translations = {
    en: {
        // Navigation
        nav: {
            about: "About Us",
            achievements: "Achievements",
            services: "Services",
            cases: "Case Studies",
            pricing: "Pricing",
            faq: "FAQ",
            contact: "Contact Now"
        },

        // Hero Section
        hero: {
            badge: "Accepting New Projects",
            title1: "Transform",
            titleHighlight1: "Manual Work",
            titleInto: "Into",
            titleHighlight2: "Quality Automation",
            subtitle: "Build AI assistants that truly impact your business, driving clear revenue growth, reducing staffing needs, and saving thousands of unnecessary manual work hours.",
            stats: {
                projects: "Projects Completed",
                satisfaction: "% Client Satisfaction",
                returning: "Returning Clients",
                commitment: "Timeline Commitment"
            },
            cta: {
                primary: "Get Free Consultation",
                secondary: "View Case Studies"
            },
            trust: {
                label: "Trusted by:"
            },
            scroll: "Scroll down"
        },

        // Proof Bar
        proofBar: {
            paid: "Paid"
        },

        // About Section
        about: {
            tag: "WHY CHOOSE US?",
            title: "Not Just Working,",
            titleHighlight: "We Solve Problems",
            cards: {
                commitment: {
                    title: "Timeline Commitment",
                    desc: "Clear progress, on-time delivery. Big or small projects get priority.",
                    stat: "100% on deadline"
                },
                projects: {
                    badge: "Most Popular",
                    title: "127+ Real Projects",
                    desc: "Each project is a real challenge. No demos, no empty theory.",
                    stat: "98% satisfied clients"
                },
                support: {
                    title: "Dedicated Support",
                    desc: "Post-delivery warranty, detailed guidance, 24/7 support ready.",
                    stat: "85% returning clients"
                }
            }
        },

        // Proof Section
        proof: {
            tag: "REAL ACHIEVEMENTS",
            title: "Numbers",
            titleHighlight: "Don't Lie",
            desc: "Data from 127 real projects - Classified and verified",
            categories: {
                automation: {
                    label: "Automation Projects",
                    desc: "n8n workflows, data crawling, auto posting, Chrome extensions"
                },
                chatbot: {
                    label: "Chatbot AI",
                    desc: "Zalo, Messenger, Website, OpenAI & Gemini integration"
                },
                video: {
                    label: "Video AI & Content",
                    desc: "Auto video creation, content gen, multi-platform posting"
                },
                system: {
                    label: "System Setup",
                    desc: "Dashboard, CRM, Website, Database integration"
                },
                other: {
                    label: "Other Projects",
                    desc: "Diverse industries, custom solutions by request"
                }
            },
            highlight: {
                title: "Highlights",
                items: [
                    "Multi-platform: Zalo, Facebook, Instagram, TikTok, Shopee, YouTube",
                    "AI Integration: OpenAI, Gemini, ElevenLabs, Leonardo AI, Veo 3",
                    "Database: Supabase, PostgreSQL, Google Sheets, Redis",
                    "Technology: n8n, Puppeteer, Chrome Extension, Custom API"
                ]
            }
        },

        // Services Section
        services: {
            tag: "SERVICES",
            title: "Comprehensive",
            titleHighlight: "Solutions",
            desc: "From idea to deployment - All in one",
            cards: {
                chatbot: {
                    title: "Chatbot AI",
                    desc: "Smart chatbot for Zalo, Messenger, Website. OpenAI, Gemini integration. 24/7 automatic consulting.",
                    features: {
                        0: "Zalo OA & Personal Zalo",
                        1: "Facebook Messenger",
                        2: "KiotViet, MISA integration",
                        3: "Long-term Memory & Context"
                    },
                    price: "From",
                    amount: "$80"
                },
                automation: {
                    badge: "HOT",
                    title: "Automation Workflow",
                    desc: "Automate any process with n8n. Data crawling, auto posting, order processing, auto reports.",
                    features: {
                        0: "Custom n8n workflow",
                        1: "Crawl data from any source",
                        2: "Multi-platform auto post",
                        3: "Shopee, TikTok Shop integration"
                    },
                    price: "From",
                    amount: "$60"
                },
                video: {
                    title: "Video AI & Content",
                    desc: "Auto create videos from scripts, multi-platform content gen, post to YouTube, TikTok, Facebook.",
                    features: {
                        0: "Generate video from topic",
                        1: "ElevenLabs auto voice",
                        2: "Auto post YouTube, TikTok",
                        3: "AI content rewrite"
                    },
                    price: "From",
                    amount: "$120"
                },
                extension: {
                    title: "Chrome Extension",
                    desc: "Auto browser operation extension, autofill forms, crawl data, workflow automation.",
                    features: {
                        0: "Complex form autofill",
                        1: "Web data crawling",
                        2: "Auto browser actions",
                        3: "Captcha handling"
                    },
                    price: "From",
                    amount: "$100"
                },
                dashboard: {
                    title: "Dashboard & CRM",
                    desc: "Custom management system, reporting dashboard, multi-source data integration.",
                    features: {
                        0: "Visual dashboard",
                        1: "Auto reporting",
                        2: "Supabase, PostgreSQL integration",
                        3: "Export Excel, PDF"
                    },
                    price: "From",
                    amount: "$160"
                },
                api: {
                    title: "API Integration",
                    desc: "Connect all systems: Shopee, TikTok Shop, MISA, KiotViet, Sapo, Nhanh.vn and more.",
                    features: {
                        0: "E-commerce platform integration",
                        1: "Accounting software connection",
                        2: "Custom Webhook & API",
                        3: "Realtime data sync"
                    },
                    price: "From",
                    amount: "$72"
                }
            }
        },

        // Case Studies Section
        cases: {
            tag: "CASE STUDIES",
            title: "Featured",
            titleHighlight: "Projects",
            desc: "The most complex projects, the most impressive results",
            filters: {
                all: "All",
                automation: "Automation",
                chatbot: "Chatbot",
                video: "Video AI",
                system: "System"
            },
            status: {
                completed: "✓ Completed",
                inProgress: "⚡ In Progress"
            },
            cards: {
                case1: {
                    title: "Carpet Product Customer Care Chatbot - MISA Integration",
                    desc: "Built consulting & customer care chatbot via Zalo and Fanpage. MISA integration for inventory check, wholesale/retail customer classification, product image sending."
                },
                case2: {
                    title: "Shopee & TikTok Shop Automation System",
                    desc: "Auto crawl orders, income, wallet. Auto order reconciliation, daily/weekly/monthly reports via Zalo."
                },
                case3: {
                    title: "TRADEINT.COM DATA CRAWL",
                    desc: "Crawl ~16,000 HS codes, 5 years of import/export data. OTP handling, session maintenance, database storage. Export to Google Sheets on demand."
                },
                case4: {
                    title: "Story Video Creation with ChatGPT + Veo 3",
                    desc: "From topic → ChatGPT writes story → Create Veo 3 prompts → Generate AI video → Auto combine into finished product."
                },
                case5: {
                    title: "Amazon Product Crawl - Tracking Dashboard",
                    desc: "Amazon frontend crawl by ASIN. Daily price, deal, rating, inventory tracking. Dashboard showing fluctuations."
                },
                case6: {
                    title: "Import Label Export Website",
                    desc: "Label export system per Decree 43. Enter info → Verify → Vietnamese translation → Export original & supplementary PDF labels."
                },
                case7: {
                    title: "Zalo Message Order Processing",
                    desc: "Receive Zalo message → Gemini analyze text/image/PDF → Parse JSON order → Database insert → Auto order reminder."
                },
                case8: {
                    title: "Spa CRM App - Comprehensive Management",
                    desc: "Dashboard with 8 KPI metrics. Appointment & treatment session management. User permissions. Zalo OA appointment reminders."
                }
            },
            results: {
                auto247: "Auto 24/7",
                saveHistory: "Save history",
                autoSync: "Auto sync",
                autoReport: "Auto report",
                hsCodes: "16,000+ HS codes",
                years: "5 years data",
                fullAuto: "Full auto",
                videoAi: "Video AI",
                realtime: "Real-time tracking",
                autoAlert: "Auto alert",
                autoTranslate: "Auto translate",
                exportPdf: "Export PDF",
                readImage: "Read image/PDF",
                autoReminder: "Auto reminder",
                kpis: "8 KPIs",
                multiRole: "Multi-role"
            },
            more: {
                text: "And",
                count: "119+",
                suffix: "other completed projects...",
                btn: "See more of your projects"
            }
        },

        // Workflow Section
        workflow: {
            tag: "PROCESS",
            title: "From Idea To",
            titleHighlight: "Delivery",
            desc: "Simple, transparent, effective 4-step process",
            steps: {
                step1: {
                    title: "Consultation & Analysis",
                    desc: "Listen to requirements, analyze the problem, propose optimal solutions.",
                    time: "1-2 hours"
                },
                step2: {
                    title: "Quote & Confirmation",
                    desc: "Detailed quote, specific timeline. 50% payment to start.",
                    time: "1-4 hours"
                },
                step3: {
                    title: "Development & Demo",
                    desc: "Develop as required, continuous demo, adjust based on feedback.",
                    time: "24-72 hours"
                },
                step4: {
                    title: "Delivery & Warranty",
                    desc: "Full delivery, usage guide, 14-day warranty.",
                    time: "Complete"
                }
            }
        },

        // Pricing Section
        pricing: {
            tag: "PRICING",
            title: "Transparent,",
            titleHighlight: "No Hidden Fees",
            desc: "Fixed price by complexity - No hidden costs",
            currency: "$",
            plans: {
                basic: {
                    name: "Basic",
                    desc: "Simple projects",
                    amount: "40",
                    range: "- $160",
                    features: [
                        "Simple workflow",
                        "1-3 main nodes",
                        "Detailed usage guide",
                        "7-day warranty",
                        "Zalo support"
                    ],
                    cta: "Consult Now"
                },
                standard: {
                    badge: "POPULAR",
                    name: "Standard",
                    desc: "Medium complexity projects",
                    amount: "160",
                    range: "- $400",
                    features: [
                        "Complex workflow",
                        "AI integration (GPT, Gemini)",
                        "Database integration",
                        "14-day warranty",
                        "Priority support",
                        "Demo & training"
                    ],
                    cta: "Consult Now"
                },
                enterprise: {
                    name: "Enterprise",
                    desc: "Large-scale projects",
                    price: "Contact",
                    features: [
                        "Comprehensive system",
                        "Multi-platform",
                        "Dashboard & CRM",
                        "Self-hosted n8n",
                        "30-day warranty",
                        "Training & handover"
                    ],
                    cta: "Schedule Consultation"
                }
            },
            note: "Prices are for reference only. Contact for accurate quote for your project."
        },

        // FAQ Section
        faq: {
            tag: "FAQ",
            title: "Frequently",
            titleHighlight: "Asked Questions",
            items: {
                q1: {
                    question: "How long does project completion take?",
                    answer: "Most projects complete in 5-7 days. Complex projects may take 20-30 days. We always communicate specific timeline before starting."
                },
                q2: {
                    question: "What do I need to provide?",
                    answer: "Depending on the project, you need to provide: n8n account (or we set up), API keys, platform accounts for integration, and detailed requirement description."
                },
                q3: {
                    question: "How is payment done?",
                    answer: "40% to start, 60% upon completion when you're satisfied with results. Payment via bank transfer or e-wallet."
                },
                q4: {
                    question: "Is there post-delivery warranty?",
                    answer: "Yes! All projects get 14-day free warranty. Bug fixes, minor adjustments at no extra cost. Enterprise projects get 30-day warranty."
                },
                q5: {
                    question: "What if I'm not satisfied?",
                    answer: "We demo continuously during development. If final result doesn't match initial requirements, you can request free modifications or refund."
                },
                q6: {
                    question: "Is there post-delivery support?",
                    answer: "Of course! We're always ready to support and consult after delivery. 85% of clients returning with new projects proves that."
                }
            }
        },

        // Booking Section
        booking: {
            tag: "SCHEDULE CONSULTATION",
            title: "Book a Free",
            titleHighlight: "1:1 Discussion",
            desc: "Choose a convenient time to discuss your project directly. We'll analyze requirements and propose optimal solutions.",
            benefits: [
                "Free 30-minute consultation",
                "Detailed requirement analysis",
                "Suitable solution proposal",
                "Clear quote, no hidden fees"
            ],
            cta: "Book Now",
            card: {
                platform: "Google Meet",
                duration: "30 minutes",
                price: "Free",
                flexible: "Flexible timing",
                status: "Accepting new bookings"
            }
        },

        // CTA Section
        cta: {
            tag: "READY TO START?",
            title: "Let Us Help You",
            titleHighlight: "Automate Everything",
            desc: "Don't let manual work take all your time. 127+ projects completed. You could be the next.",
            contact: {
                company: "Company",
                companyName: "TECHLA AI CO., LTD",
                zalo: "Zalo / Hotline",
                email: "Email"
            },
            buttons: {
                zalo: "Chat Zalo Now",
                booking: "Schedule Consultation"
            },
            trust: {
                security: "Information security",
                response: "Response in 30 minutes",
                free: "Free consultation"
            }
        },

        // Footer
        footer: {
            brand: "TECHLA AI CO., LTD - Building AI assistants that drive clear revenue growth, reduce staffing needs, and save thousands of unnecessary manual work hours.",
            services: "Services",
            links: "Links",
            contact: "Contact",
            copyright: "© 2025 TECHLA AI CO., LTD. All rights reserved."
        }
    },

    vi: {
        // Navigation
        nav: {
            about: "Về Chúng Tôi",
            achievements: "Thành Tích",
            services: "Dịch Vụ",
            cases: "Case Studies",
            pricing: "Báo Giá",
            faq: "FAQ",
            contact: "Liên Hệ Ngay"
        },

        // Hero Section
        hero: {
            badge: "Đang Nhận Dự Án Mới",
            title1: "Biến",
            titleHighlight1: "Thủ Công",
            titleInto: "Thành",
            titleHighlight2: "Tự Động Chất Lượng",
            subtitle: "Xây dựng các trợ lý AI thực sự tạo ra tác động tại doanh nghiệp của bạn, thúc đẩy tăng trưởng doanh thu rõ rệt, giảm nhu cầu về nhân sự và tiết kiệm hàng nghìn giờ làm việc thủ công không cần thiết.",
            stats: {
                projects: "Dự Án Hoàn Thành",
                satisfaction: "% Khách Hài Lòng",
                returning: "Khách Quay Lại",
                commitment: "Cam Kết Tiến Độ"
            },
            cta: {
                primary: "Nhận Tư Vấn Miễn Phí",
                secondary: "Xem Case Studies"
            },
            trust: {
                label: "Đã tin tưởng bởi:"
            },
            scroll: "Cuộn xuống"
        },

        // Proof Bar
        proofBar: {
            paid: "Đã thanh toán"
        },

        // About Section
        about: {
            tag: "TẠI SAO CHỌN CHÚNG TÔI?",
            title: "Không Chỉ Làm Việc,",
            titleHighlight: "Chúng tôi Giải Quyết Vấn Đề",
            cards: {
                commitment: {
                    title: "Cam Kết Tiến Độ",
                    desc: "Tiến độ rõ ràng, bàn giao đúng hẹn. Dự án lớn hay nhỏ đều được ưu tiên.",
                    stat: "100% đúng deadline"
                },
                projects: {
                    badge: "Phổ Biến Nhất",
                    title: "127+ Dự Án Thực Tế",
                    desc: "Mỗi dự án là một bài toán thực. Không demo, không lý thuyết suông.",
                    stat: "98% khách hài lòng"
                },
                support: {
                    title: "Hỗ Trợ Tận Tâm",
                    desc: "Bảo hành sau bàn giao, hướng dẫn chi tiết, sẵn sàng hỗ trợ 24/7.",
                    stat: "85% khách quay lại"
                }
            }
        },

        // Proof Section
        proof: {
            tag: "THÀNH TÍCH THỰC TẾ",
            title: "Con Số",
            titleHighlight: "Không Biết Nói Dối",
            desc: "Dữ liệu từ 127 dự án thật - Được phân loại và kiểm chứng",
            categories: {
                automation: {
                    label: "Automation Projects",
                    desc: "Workflow n8n, crawl data, auto posting, extension Chrome"
                },
                chatbot: {
                    label: "Chatbot AI",
                    desc: "Zalo, Messenger, Website, tích hợp OpenAI & Gemini"
                },
                video: {
                    label: "Video AI & Content",
                    desc: "Tự động tạo video, gen content, đăng multi-platform"
                },
                system: {
                    label: "System Setup",
                    desc: "Dashboard, CRM, Website, Database integration"
                },
                other: {
                    label: "Các Dự Án Khác",
                    desc: "Đa dạng ngành nghề, giải pháp custom theo yêu cầu"
                }
            },
            highlight: {
                title: "Điểm Nổi Bật",
                items: [
                    "Đa nền tảng: Zalo, Facebook, Instagram, TikTok, Shopee, YouTube",
                    "Tích hợp AI: OpenAI, Gemini, ElevenLabs, Leonardo AI, Veo 3",
                    "Database: Supabase, PostgreSQL, Google Sheets, Redis",
                    "Công nghệ: n8n, Puppeteer, Chrome Extension, API custom"
                ]
            }
        },

        // Services Section
        services: {
            tag: "DỊCH VỤ",
            title: "Giải Pháp",
            titleHighlight: "Toàn Diện",
            desc: "Từ ý tưởng đến triển khai - Tất cả trong một",
            cards: {
                chatbot: {
                    title: "Chatbot AI",
                    desc: "Chatbot thông minh cho Zalo, Messenger, Website. Tích hợp OpenAI, Gemini. Tư vấn tự động 24/7.",
                    features: {
                        0: "Zalo OA & Zalo cá nhân",
                        1: "Facebook Messenger",
                        2: "Tích hợp KiotViet, MISA",
                        3: "Memory & Context dài hạn"
                    },
                    price: "Từ",
                    amount: "2.000.000đ"
                },
                automation: {
                    badge: "HOT",
                    title: "Automation Workflow",
                    desc: "Tự động hóa mọi quy trình bằng n8n. Crawl data, auto posting, xử lý đơn hàng, báo cáo tự động.",
                    features: {
                        0: "Workflow n8n custom",
                        1: "Crawl data từ mọi nguồn",
                        2: "Auto post đa nền tảng",
                        3: "Tích hợp Shopee, TikTok Shop"
                    },
                    price: "Từ",
                    amount: "1.500.000đ"
                },
                video: {
                    title: "Video AI & Content",
                    desc: "Tự động tạo video từ script, gen content đa nền tảng, đăng lên YouTube, TikTok, Facebook.",
                    features: {
                        0: "Gen video từ chủ đề",
                        1: "Auto voice với ElevenLabs",
                        2: "Đăng tự động YouTube, TikTok",
                        3: "Rewrite content với AI"
                    },
                    price: "Từ",
                    amount: "3.000.000đ"
                },
                extension: {
                    title: "Chrome Extension",
                    desc: "Extension tự động thao tác trình duyệt, autofill form, crawl data, tự động hóa workflow.",
                    features: {
                        0: "Autofill form phức tạp",
                        1: "Crawl data web",
                        2: "Tự động thao tác browser",
                        3: "Xử lý captcha"
                    },
                    price: "Từ",
                    amount: "2.500.000đ"
                },
                dashboard: {
                    title: "Dashboard & CRM",
                    desc: "Hệ thống quản lý tùy chỉnh, dashboard báo cáo, tích hợp dữ liệu từ nhiều nguồn.",
                    features: {
                        0: "Dashboard trực quan",
                        1: "Báo cáo tự động",
                        2: "Tích hợp Supabase, PostgreSQL",
                        3: "Export Excel, PDF"
                    },
                    price: "Từ",
                    amount: "4.000.000đ"
                },
                api: {
                    title: "API Integration",
                    desc: "Kết nối mọi hệ thống: Shopee, TikTok Shop, MISA, KiotViet, Sapo, Nhanh.vn và nhiều hơn.",
                    features: {
                        0: "Tích hợp sàn TMĐT",
                        1: "Kết nối phần mềm kế toán",
                        2: "Webhook & API custom",
                        3: "Đồng bộ dữ liệu realtime"
                    },
                    price: "Từ",
                    amount: "1.800.000đ"
                }
            }
        },

        // Case Studies Section
        cases: {
            tag: "CASE STUDIES",
            title: "Dự Án",
            titleHighlight: "Tiêu Biểu",
            desc: "Những dự án phức tạp nhất, kết quả ấn tượng nhất",
            filters: {
                all: "Tất Cả",
                automation: "Automation",
                chatbot: "Chatbot",
                video: "Video AI",
                system: "System"
            },
            status: {
                completed: "✓ Đã hoàn thành",
                inProgress: "⚡ Đang thực hiện"
            },
            cards: {
                case1: {
                    title: "Chatbot CSKH sản phẩm thảm - Tích hợp MISA",
                    desc: "Xây dựng chatbot tư vấn & CSKH qua Zalo và Fanpage. Tích hợp MISA để kiểm tra tồn kho, phân loại khách hàng sỉ/lẻ, gửi ảnh sản phẩm."
                },
                case2: {
                    title: "Hệ thống tự động hóa Shopee & TikTok Shop",
                    desc: "Tự động crawl đơn hàng, income, wallet. Đối soát đơn hàng tự động, gửi báo cáo hàng ngày/tuần/tháng qua Zalo."
                },
                case3: {
                    title: "CRAWL DỮ LIỆU TRADEINT.COM",
                    desc: "Crawl ~16,000 mã HS, 5 năm dữ liệu XNK. Xử lý OTP, duy trì session, lưu vào database. Xuất Google Sheets theo nhu cầu."
                },
                case4: {
                    title: "Tạo video truyện với ChatGPT + Veo 3",
                    desc: "Từ chủ đề → ChatGPT viết truyện → Tạo prompt cho Veo 3 → Sinh video AI → Ghép thành sản phẩm hoàn chỉnh tự động."
                },
                case5: {
                    title: "Crawl sản phẩm Amazon - Dashboard theo dõi",
                    desc: "Crawl frontend Amazon theo ASIN. Theo dõi giá, deal, rating, inventory hàng ngày. Dashboard hiển thị biến động."
                },
                case6: {
                    title: "Website xuất TEM nhãn nhập khẩu",
                    desc: "Hệ thống xuất tem theo Nghị định 43. Nhập thông tin → Kiểm tra → Dịch tiếng Việt → Xuất PDF tem gốc & tem phụ."
                },
                case7: {
                    title: "Xử lý đơn hàng từ tin nhắn Zalo",
                    desc: "Nhận tin nhắn Zalo → Gemini phân tích text/ảnh/PDF → Parse đơn hàng JSON → Insert database → Nhắc lịch đặt hàng tự động."
                },
                case8: {
                    title: "Spa CRM App - Quản lý toàn diện",
                    desc: "Dashboard 8 chỉ số KPI. Quản lý lịch hẹn, buổi điều trị. Phân quyền người dùng. Gửi nhắc lịch qua Zalo OA."
                }
            },
            results: {
                auto247: "Tự động 24/7",
                saveHistory: "Lưu lịch sử",
                autoSync: "Auto sync",
                autoReport: "Báo cáo tự động",
                hsCodes: "16,000+ mã HS",
                years: "5 năm data",
                fullAuto: "Full auto",
                videoAi: "Video AI",
                realtime: "Real-time tracking",
                autoAlert: "Auto alert",
                autoTranslate: "Auto translate",
                exportPdf: "Export PDF",
                readImage: "Đọc ảnh/PDF",
                autoReminder: "Auto reminder",
                kpis: "8 KPIs",
                multiRole: "Multi-role"
            },
            more: {
                text: "Và còn",
                count: "119+",
                suffix: "dự án khác đã hoàn thành...",
                btn: "Xem thêm dự án của bạn"
            }
        },

        // Workflow Section
        workflow: {
            tag: "QUY TRÌNH",
            title: "Từ Ý Tưởng Đến",
            titleHighlight: "Bàn Giao",
            desc: "Quy trình 4 bước đơn giản, minh bạch, hiệu quả",
            steps: {
                step1: {
                    title: "Tư Vấn & Phân Tích",
                    desc: "Lắng nghe yêu cầu, phân tích bài toán, đề xuất giải pháp tối ưu nhất.",
                    time: "1-2 giờ"
                },
                step2: {
                    title: "Báo Giá & Xác Nhận",
                    desc: "Báo giá chi tiết, timeline cụ thể. Thanh toán 50% để bắt đầu.",
                    time: "1-4 giờ"
                },
                step3: {
                    title: "Triển Khai & Demo",
                    desc: "Phát triển theo yêu cầu, demo liên tục, điều chỉnh theo feedback.",
                    time: "24-72 giờ"
                },
                step4: {
                    title: "Bàn Giao & Bảo Hành",
                    desc: "Bàn giao đầy đủ, hướng dẫn sử dụng, bảo hành 14 ngày.",
                    time: "Hoàn thành"
                }
            }
        },

        // Pricing Section
        pricing: {
            tag: "BẢNG GIÁ",
            title: "Minh Bạch,",
            titleHighlight: "Không Phát Sinh",
            desc: "Giá cố định theo complexity - Không phí ẩn",
            currency: "₫",
            plans: {
                basic: {
                    name: "Basic",
                    desc: "Dự án đơn giản",
                    amount: "1M",
                    range: "- 4M",
                    features: [
                        "Workflow đơn giản",
                        "1-3 node chính",
                        "Hướng dẫn sử dụng chi tiết",
                        "Bảo hành 7 ngày",
                        "Hỗ trợ qua Zalo"
                    ],
                    cta: "Tư Vấn Ngay"
                },
                standard: {
                    badge: "PHỔ BIẾN",
                    name: "Standard",
                    desc: "Dự án phức tạp vừa",
                    amount: "4M",
                    range: "- 10M",
                    features: [
                        "Workflow phức tạp",
                        "Tích hợp AI (GPT, Gemini)",
                        "Database integration",
                        "Bảo hành 14 ngày",
                        "Hỗ trợ ưu tiên",
                        "Demo & training"
                    ],
                    cta: "Tư Vấn Ngay"
                },
                enterprise: {
                    name: "Enterprise",
                    desc: "Dự án quy mô lớn",
                    price: "Liên Hệ",
                    features: [
                        "Hệ thống toàn diện",
                        "Multi-platform",
                        "Dashboard & CRM",
                        "Self-hosted n8n",
                        "Bảo hành 30 ngày",
                        "Đào tạo & chuyển giao"
                    ],
                    cta: "Đặt Lịch Tư Vấn"
                }
            },
            note: "Giá trên chỉ mang tính tham khảo. Liên hệ để nhận báo giá chính xác cho dự án của bạn."
        },

        // FAQ Section
        faq: {
            tag: "FAQ",
            title: "Câu Hỏi",
            titleHighlight: "Thường Gặp",
            items: {
                q1: {
                    question: "Thời gian hoàn thành dự án là bao lâu?",
                    answer: "Đa số dự án hoàn thành trong 5-7 ngày. Dự án phức tạp có thể mất 20-30 ngày. Chúng tôi luôn thông báo timeline cụ thể trước khi bắt đầu."
                },
                q2: {
                    question: "Có cần tôi cung cấp gì không?",
                    answer: "Tùy dự án, bạn cần cung cấp: Tài khoản n8n (hoặc chúng tôi setup), API keys, tài khoản các nền tảng cần tích hợp, và mô tả yêu cầu chi tiết."
                },
                q3: {
                    question: "Thanh toán như thế nào?",
                    answer: "40% khi bắt đầu, 60% khi hoàn thành và bạn hài lòng với kết quả. Thanh toán qua chuyển khoản ngân hàng hoặc ví điện tử."
                },
                q4: {
                    question: "Có bảo hành sau bàn giao không?",
                    answer: "Có! Tất cả dự án đều được bảo hành 14 ngày miễn phí. Fix bug, điều chỉnh nhỏ không phát sinh chi phí. Dự án Enterprise bảo hành 30 ngày."
                },
                q5: {
                    question: "Nếu không hài lòng thì sao?",
                    answer: "Chúng tôi luôn demo liên tục trong quá trình làm. Nếu kết quả cuối không đúng yêu cầu ban đầu, bạn có thể yêu cầu sửa đổi miễn phí hoặc hoàn tiền."
                },
                q6: {
                    question: "Có hỗ trợ sau khi bàn giao không?",
                    answer: "Tất nhiên! Chúng tôi luôn sẵn sàng hỗ trợ, tư vấn sau bàn giao. 85% khách hàng quay lại với dự án mới chứng minh điều đó."
                }
            }
        },

        // Booking Section
        booking: {
            tag: "ĐẶT LỊCH TƯ VẤN",
            title: "Đặt Lịch Trao Đổi",
            titleHighlight: "1:1 Miễn Phí",
            desc: "Chọn thời gian phù hợp để trao đổi trực tiếp về dự án của bạn. Chúng tôi sẽ phân tích yêu cầu và đề xuất giải pháp tối ưu.",
            benefits: [
                "Tư vấn miễn phí 30 phút",
                "Phân tích yêu cầu chi tiết",
                "Đề xuất giải pháp phù hợp",
                "Báo giá rõ ràng, không phát sinh"
            ],
            cta: "Đặt Lịch Ngay",
            card: {
                platform: "Google Meet",
                duration: "30 phút",
                price: "Miễn phí",
                flexible: "Linh hoạt thời gian",
                status: "Đang nhận lịch mới"
            }
        },

        // CTA Section
        cta: {
            tag: "SẴN SÀNG BẮT ĐẦU?",
            title: "Hãy Để Chúng tôi Giúp Bạn",
            titleHighlight: "Tự Động Hóa Mọi Thứ",
            desc: "Đừng để các công việc thủ công chiếm hết thời gian của bạn. 127+ dự án đã hoàn thành. Bạn có thể là dự án tiếp theo.",
            contact: {
                company: "Công ty",
                companyName: "CÔNG TY TNHH TECHLA AI",
                zalo: "Zalo / Hotline",
                email: "Email"
            },
            buttons: {
                zalo: "Chat Zalo Ngay",
                booking: "Đặt Lịch Tư Vấn"
            },
            trust: {
                security: "Bảo mật thông tin",
                response: "Phản hồi trong 30 phút",
                free: "Tư vấn miễn phí"
            }
        },

        // Footer
        footer: {
            brand: "CÔNG TY TNHH TECHLA AI - Xây dựng các trợ lý AI thúc đẩy tăng trưởng doanh thu rõ rệt, giảm nhu cầu về nhân sự và tiết kiệm hàng nghìn giờ làm việc thủ công không cần thiết.",
            services: "Dịch Vụ",
            links: "Liên Kết",
            contact: "Liên Hệ",
            copyright: "© 2025 CÔNG TY TNHH TECHLA AI. All rights reserved."
        }
    }
};

// Current language state
let currentLanguage = localStorage.getItem('techla-lang') || 'en';

// Get nested translation value
function getTranslation(key, lang) {
    const keys = key.split('.');
    let value = translations[lang];
    for (const k of keys) {
        if (value && value[k] !== undefined) {
            value = value[k];
        } else {
            return null;
        }
    }
    return value;
}

// Apply translations to all elements with data-i18n attribute
function applyTranslations(lang) {
    const elements = document.querySelectorAll('[data-i18n]');

    elements.forEach(el => {
        const key = el.getAttribute('data-i18n');
        const translation = getTranslation(key, lang);

        if (translation !== null) {
            // Check if it's an input placeholder
            if (el.hasAttribute('placeholder')) {
                el.placeholder = translation;
            } else {
                el.textContent = translation;
            }
        }
    });

    // Update HTML lang attribute
    document.documentElement.lang = lang;
}

// Set language with smooth transition
function setLanguage(lang) {
    if (lang !== 'en' && lang !== 'vi') {
        lang = 'en';
    }

    // Add transition class
    document.body.classList.add('lang-switching');

    // Wait for fade out
    setTimeout(() => {
        currentLanguage = lang;
        localStorage.setItem('techla-lang', lang);
        applyTranslations(lang);

        // Update language switcher button
        updateLangSwitcher(lang);

        // Remove transition class (fade in)
        setTimeout(() => {
            document.body.classList.remove('lang-switching');
        }, 50);
    }, 300);
}

// Update language switcher button appearance
function updateLangSwitcher(lang) {
    const switchers = document.querySelectorAll('.lang-switcher');
    switchers.forEach(switcher => {
        const flag = switcher.querySelector('.lang-flag');
        const code = switcher.querySelector('.lang-code');

        if (flag && code) {
            if (lang === 'en') {
                flag.textContent = '🇺🇸';
                code.textContent = 'EN';
            } else {
                flag.textContent = '🇻🇳';
                code.textContent = 'VI';
            }
        }
    });
}

// Toggle language
function toggleLanguage() {
    const newLang = currentLanguage === 'en' ? 'vi' : 'en';
    setLanguage(newLang);
}

// Get current language
function getCurrentLanguage() {
    return currentLanguage;
}

// Initialize language on page load
function initLanguage() {
    applyTranslations(currentLanguage);
    updateLangSwitcher(currentLanguage);

    // Setup language switcher click handlers
    const switchers = document.querySelectorAll('.lang-switcher');
    switchers.forEach(switcher => {
        switcher.addEventListener('click', (e) => {
            e.preventDefault();
            toggleLanguage();
        });
    });
}

// Auto-initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initLanguage);
} else {
    initLanguage();
}
