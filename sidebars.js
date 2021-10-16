/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

module.exports = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  //tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],

  // But you can create a sidebar manually
  /*
  tutorialSidebar: [
    {
      type: 'category',
      label: 'Tutorial',
      items: ['hello'],
    },
  ],
  */

    topSidebar: {
        "システム構成": [
            "guides/top",
            "guides/overview",
            "guides/hardware",
            "software/software"
        ],
        "一般解析区画の使い方": [
            "general_analysis_division/ga_introduction",
            "general_analysis_division/ga_application",
            "general_analysis_division/ga_login",
            "general_analysis_division/ga_usage",
            "general_analysis_division/ga_transfer",
            "general_analysis_division/advance_reservation",
            "general_analysis_division/ga_lustre",
            "general_analysis_division/largescale_storage",
        ],
        "個人ゲノム解析区画の使い方": [
            "personal_genome_division/pg_introduction",
            "personal_genome_division/pg_application",
            "personal_genome_division/pg_login",
            "personal_genome_division/pg_usage",
            "personal_genome_division/pg_transfer",
            "general_analysis_division/ga_lustre",
            "general_analysis_division/largescale_storage",
            "personal_genome_division/group_cloud",
        ],
    },
    softwareSidebar: {
        "ジョブスケジューラ": [
            "software/univa_grid_engine",
            "software/qsub_beta",
            "software/slurm"
        ],
        "コンテナ・解析パイプライン": [
            "software/Singularity",
        ],
        "データ転送・データ共有": [
            "software/aspera/aspera",
        ],
        "開発環境・ライブラリ": [
            "software/python",
            "software/R",
            "software/jupyter_notebook",
            "software/jupyter_lab",
            "software/java",
            "software/typescript",
            "software/rust",
            "software/cuda",
        ]
    },
    applicationsSidebar : {
        "利用規定等": [
            "application/application",
            "application/use_policy",
            "application/legislation"
        ],
        "ユーザー登録・変更": [
            "application/registration",
            "application/resource_extension",
            "application/ssh_keys",
            "application/renewal",
        ],
        "課金サービス利用方法": [
            "application/billing_service",
            "application/invoice",
        ],
        "お問い合わせ等": [
            "faq/faq1",
            "application/reference"
        ],
    },
    advancedGuidesSidebar : {
        "活用方法概要": [
            "advanced_guides/advanced_guide",
        ],
        "Rhelixa RNAseq": [
            "advanced_guides/Rhelixa_RNAseq",
            "advanced_guides/Rhelixa_RNAseq_manual",
        ],
        "講習会": [
            "advanced_guides/IIBMP",
        ],
        "利用方法解説": [
            "advanced_guides/commentary"
        ],
    },
    operationInfoSidebar: {
        "お知らせ": [
            "news/N2021_1112_scheduledMaintainance",
            "news/2021_0512_shortQ",
            "news/past_news"
        ],
        "障害情報": [
            "news2/M2021_1008_TS4500",
            "news2/M2021_1004_lustre6",
            "news2/M2021_0915_lustre6-3",
            "news2/M2021_0915_lustre6-2",
            "news2/M2021_0917_lustre7",
            "news2/M2021_0915_lustre6",
            "news2/past_maintainance_info"
        ],
        "稼働状況": [
            "operation/operation",
            "operation/qstatGC",
            "operation/gfree",
        ],
    },
    reportSidebar: {
        "各種統計": [
            "report/report",
        ],
        "論文リスト": [
            "report/papers_2020",
            "report/papers_2019",
            "report/papers_2018",
            "report/papers_2017",
            "report/papers_2016",
            "report/papers_2015",
            "report/papers_2014",
            "report/papers_2013",
            "report/papers_2012",
        ],
    }

};
