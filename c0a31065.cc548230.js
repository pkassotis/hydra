(window.webpackJsonp=window.webpackJsonp||[]).push([[139],{209:function(e,n,a){"use strict";a.r(n),a.d(n,"frontMatter",(function(){return i})),a.d(n,"metadata",(function(){return l})),a.d(n,"toc",(function(){return o})),a.d(n,"default",(function(){return s}));var t=a(3),r=a(8),c=(a(0),a(268)),i={id:"ray_launcher",title:"Ray Launcher plugin",sidebar_label:"Ray Launcher plugin"},l={unversionedId:"plugins/ray_launcher",id:"version-1.0/plugins/ray_launcher",isDocsHomePage:!1,title:"Ray Launcher plugin",description:"PyPI",source:"@site/versioned_docs/version-1.0/plugins/ray_launcher.md",slug:"/plugins/ray_launcher",permalink:"/docs/plugins/ray_launcher",editUrl:"https://github.com/facebookresearch/hydra/edit/master/website/versioned_docs/version-1.0/plugins/ray_launcher.md",version:"1.0",lastUpdatedBy:"Omry Yadan",lastUpdatedAt:1611947446,sidebar_label:"Ray Launcher plugin",sidebar:"version-1.0/docs",previous:{title:"Joblib Launcher plugin",permalink:"/docs/plugins/joblib_launcher"},next:{title:"RQ Launcher plugin",permalink:"/docs/plugins/rq_launcher"}},o=[{value:"Installation",id:"installation",children:[]},{value:"Usage",id:"usage",children:[]},{value:"<code>ray_aws</code> launcher",id:"ray_aws-launcher",children:[]},{value:"<code>ray</code> launcher",id:"ray-launcher",children:[]},{value:"Configure <code>ray.init()</code> and <code>ray.remote()</code>",id:"configure-rayinit-and-rayremote",children:[]}],p={toc:o};function s(e){var n=e.components,a=Object(r.a)(e,["components"]);return Object(c.b)("wrapper",Object(t.a)({},p,a,{components:n,mdxType:"MDXLayout"}),Object(c.b)("p",null,Object(c.b)("a",Object(t.a)({parentName:"p"},{href:"https://pypi.org/project/hydra-ray-launcher/"}),Object(c.b)("img",Object(t.a)({parentName:"a"},{src:"https://img.shields.io/pypi/v/hydra-ray-launcher",alt:"PyPI"}))),"\n",Object(c.b)("img",Object(t.a)({parentName:"p"},{src:"https://img.shields.io/pypi/l/hydra-ray-launcher",alt:"PyPI - License"})),"\n",Object(c.b)("img",Object(t.a)({parentName:"p"},{src:"https://img.shields.io/pypi/pyversions/hydra-ray-launcher",alt:"PyPI - Python Version"})),"\n",Object(c.b)("a",Object(t.a)({parentName:"p"},{href:"https://pypistats.org/packages/hydra-ray-launcher"}),Object(c.b)("img",Object(t.a)({parentName:"a"},{src:"https://img.shields.io/pypi/dm/hydra-ray-launcher.svg",alt:"PyPI - Downloads"}))),"\n",Object(c.b)("a",Object(t.a)({parentName:"p"},{href:"https://github.com/facebookresearch/hydra/tree/1.0_branch/plugins/hydra_ray_launcher/examples"}),Object(c.b)("img",Object(t.a)({parentName:"a"},{src:"https://img.shields.io/badge/-Example%20application-informational",alt:"Example application"}))),"\n",Object(c.b)("a",Object(t.a)({parentName:"p"},{href:"https://github.com/facebookresearch/hydra/tree/1.0_branch/plugins/hydra_ray_launcher"}),Object(c.b)("img",Object(t.a)({parentName:"a"},{src:"https://img.shields.io/badge/-Plugin%20source-informational",alt:"Plugin source"})))),Object(c.b)("p",null,"The Ray Launcher plugin provides 2 launchers: ",Object(c.b)("inlineCode",{parentName:"p"},"ray_aws")," and ",Object(c.b)("inlineCode",{parentName:"p"},"ray"),".\n",Object(c.b)("inlineCode",{parentName:"p"},"ray_aws")," launches jobs remotely on AWS and is built on top of ",Object(c.b)("a",Object(t.a)({parentName:"p"},{href:"https://docs.ray.io/en/latest/cluster/launcher.html"}),"Ray cluster launcher"),". ",Object(c.b)("inlineCode",{parentName:"p"},"ray")," launches jobs on your local machine or existing ray cluster. "),Object(c.b)("h3",{id:"installation"},"Installation"),Object(c.b)("pre",null,Object(c.b)("code",Object(t.a)({parentName:"pre"},{className:"language-commandline"}),"$ pip install hydra-ray-launcher --pre\n")),Object(c.b)("h3",{id:"usage"},"Usage"),Object(c.b)("p",null,"Once installed, add ",Object(c.b)("inlineCode",{parentName:"p"},"hydra/launcher=ray_aws")," or ",Object(c.b)("inlineCode",{parentName:"p"},"hydra/launcher=ray")," to your command line. Alternatively, override ",Object(c.b)("inlineCode",{parentName:"p"},"hydra/launcher")," in your config:"),Object(c.b)("pre",null,Object(c.b)("code",Object(t.a)({parentName:"pre"},{className:"language-yaml"}),"defaults:\n  - hydra/launcher: ray_aws\n")),Object(c.b)("h3",{id:"ray_aws-launcher"},Object(c.b)("inlineCode",{parentName:"h3"},"ray_aws")," launcher"),Object(c.b)("div",{className:"admonition admonition-important alert alert--info"},Object(c.b)("div",Object(t.a)({parentName:"div"},{className:"admonition-heading"}),Object(c.b)("h5",{parentName:"div"},Object(c.b)("span",Object(t.a)({parentName:"h5"},{className:"admonition-icon"}),Object(c.b)("svg",Object(t.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(c.b)("path",Object(t.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"important")),Object(c.b)("div",Object(t.a)({parentName:"div"},{className:"admonition-content"}),Object(c.b)("p",{parentName:"div"},Object(c.b)("inlineCode",{parentName:"p"},"ray_aws")," launcher is built on top of ray's ",Object(c.b)("a",Object(t.a)({parentName:"p"},{href:"https://docs.ray.io/en/latest/cluster/launcher.html"}),"cluster launcher cli"),". To get started, you need to\n",Object(c.b)("a",Object(t.a)({parentName:"p"},{href:"https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-files.html"}),"config your AWS credentials"),".\n",Object(c.b)("inlineCode",{parentName:"p"},"ray cluster launcher")," expects your AWS credentials have certain permissions for ",Object(c.b)("a",Object(t.a)({parentName:"p"},{href:"https://aws.amazon.com/ec2"}),Object(c.b)("inlineCode",{parentName:"a"},"EC2"))," and ",Object(c.b)("a",Object(t.a)({parentName:"p"},{href:"https://aws.amazon.com/iam"}),Object(c.b)("inlineCode",{parentName:"a"},"IAM")),". Read ",Object(c.b)("a",Object(t.a)({parentName:"p"},{href:"https://github.com/ray-project/ray/issues/9327"}),"this")," for more information."))),Object(c.b)("p",null,Object(c.b)("inlineCode",{parentName:"p"},"ray cluster launcher")," expects a yaml file to provide configuration for the EC2 cluster; we've schematized the configs in ",Object(c.b)("a",Object(t.a)({parentName:"p"},{href:"https://github.com/facebookresearch/hydra/blob/master/plugins/hydra_ray_launcher/hydra_plugins/hydra_ray_launcher/conf/__init__.py"}),Object(c.b)("inlineCode",{parentName:"a"},"RayClusterConf")),", "),Object(c.b)("details",null,Object(c.b)("summary",null,"Discover ray_aws launcher's config"),Object(c.b)("pre",null,Object(c.b)("code",Object(t.a)({parentName:"pre"},{className:"language-commandline"}),"$ python my_app.py hydra/launcher=ray_aws --cfg hydra -p hydra.launcher\n# @package hydra.launcher\n_target_: hydra_plugins.hydra_ray_launcher.ray_aws_launcher.RayAWSLauncher\nenv_setup:\n  pip_packages:\n    omegaconf: 2.0.5\n    hydra_core: 1.0.4\n    ray: 1.0.1.post1\n    cloudpickle: 1.6.0\n    pickle5: 0.0.11\n    hydra_ray_launcher: 0.1.2\n  commands:\n  - conda create -n hydra_${python_version:micro} python=${python_version:micro} -y\n  - echo 'export PATH=\"$HOME/anaconda3/envs/hydra_${python_version:micro}/bin:$PATH\"'\n    >> ~/.bashrc\nray:\n  init:\n    address: null\n  remote: {}\n  cluster:\n    cluster_name: default\n    min_workers: 0\n    max_workers: 1\n    initial_workers: 0\n    autoscaling_mode: default\n    target_utilization_fraction: 0.8\n    idle_timeout_minutes: 5\n    docker:\n      image: ''\n      container_name: ''\n      pull_before_run: true\n      run_options: []\n    provider:\n      type: aws\n      region: us-west-2\n      availability_zone: us-west-2a,us-west-2b\n      cache_stopped_nodes: false\n      key_pair:\n        key_name: hydra\n    auth:\n      ssh_user: ubuntu\n    head_node:\n      InstanceType: m5.large\n      ImageId: ami-008d8ed4bd7dc2485\n    worker_nodes:\n      InstanceType: m5.large\n      ImageId: ami-008d8ed4bd7dc2485\n    file_mounts: {}\n    initialization_commands: []\n    setup_commands: []\n    head_setup_commands: []\n    worker_setup_commands: []\n    head_start_ray_commands:\n    - ray stop\n    - ulimit -n 65536; ray start --head --redis-port=6379 --object-manager-port=8076\n      --autoscaling-config=~/ray_bootstrap_config.yaml\n    worker_start_ray_commands:\n    - ray stop\n    - ulimit -n 65536; ray start --address=$RAY_HEAD_IP:6379 --object-manager-port=8076\nstop_cluster: true\nsync_up:\n  source_dir: null\n  target_dir: null\n  include: []\n  exclude: []\nsync_down:\n  source_dir: null\n  target_dir: null\n  include: []\n  exclude: []\n"))),Object(c.b)("h4",{id:"examples"},"Examples"),Object(c.b)("p",null,"The following examples can be found ",Object(c.b)("a",Object(t.a)({parentName:"p"},{href:"https://github.com/facebookresearch/hydra/tree/1.0_branch/plugins/hydra_ray_launcher/examples"}),"here"),"."),Object(c.b)("details",null,Object(c.b)("summary",null,"Simple app"),Object(c.b)("pre",null,Object(c.b)("code",Object(t.a)({parentName:"pre"},{className:"language-commandline"}),"$ python my_app.py --multirun task=1,2,3\n[HYDRA] Ray Launcher is launching 3 jobs, \n[HYDRA]        #0 : task=1\n[HYDRA]        #1 : task=2\n[HYDRA]        #2 : task=3\n[HYDRA] Pickle for jobs: /var/folders/n_/9qzct77j68j6n9lh0lw3vjqcn96zxl/T/tmpqqg4v4i7/job_spec.pkl\n[HYDRA] Saving RayClusterConf in a temp yaml file: /var/folders/n_/9qzct77j68j6n9lh0lw3vjqcn96zxl/T/tmpaa07pq3w.yaml.\n...\n[HYDRA] Output: INFO services.py:1164 -- View the Ray dashboard at http://127.0.0.1:8265\n(pid=3374) [__main__][INFO] - Executing task 1\n(pid=3374) [__main__][INFO] - Executing task 2\n(pid=3374) [__main__][INFO] - Executing task 3\n...\n[HYDRA] Stopping cluster now. (stop_cluster=true)\n[HYDRA] Deleted the cluster (provider.cache_stopped_nodes=false)\n[HYDRA] Running command: ['ray', 'down', '-y', '/var/folders/n_/9qzct77j68j6n9lh0lw3vjqcn96zxl/T/tmpaa07pq3w.yaml']\n\n"))),Object(c.b)("details",null,Object(c.b)("summary",null,"Upload & Download from remote cluster"),Object(c.b)("p",null,"If your application is dependent on multiple modules, you can configure ",Object(c.b)("inlineCode",{parentName:"p"},"hydra.launcher.sync_up")," to upload dependency modules to the remote cluster.\nYou can also configure ",Object(c.b)("inlineCode",{parentName:"p"},"hydra.launcher.sync_down")," to download output from remote cluster if needed. This functionality is built on top of ",Object(c.b)("inlineCode",{parentName:"p"},"rsync"),", ",Object(c.b)("inlineCode",{parentName:"p"},"include")," and ",Object(c.b)("inlineCode",{parentName:"p"},"exclude")," is consistent with how it works in ",Object(c.b)("inlineCode",{parentName:"p"},"rsync"),"."),Object(c.b)("pre",null,Object(c.b)("code",Object(t.a)({parentName:"pre"},{className:"language-commandline"}),"\n$  python train.py --multirun random_seed=1,2,3\n[HYDRA] Ray Launcher is launching 3 jobs, \n[HYDRA]        #0 : random_seed=1\n[HYDRA]        #1 : random_seed=2\n[HYDRA]        #2 : random_seed=3\n[HYDRA] Pickle for jobs: /var/folders/n_/9qzct77j68j6n9lh0lw3vjqcn96zxl/T/tmptdkye9of/job_spec.pkl\n[HYDRA] Saving RayClusterConf in a temp yaml file: /var/folders/n_/9qzct77j68j6n9lh0lw3vjqcn96zxl/T/tmp2reaoixs.yaml.\n[HYDRA] Running command: ['ray', 'up', '-y', '/var/folders/n_/9qzct77j68j6n9lh0lw3vjqcn96zxl/T/tmp2reaoixs.yaml']\n...\n[HYDRA] Output: INFO services.py:1164 -- View the Ray dashboard at http://127.0.0.1:8265\n(pid=1772) [__main__][INFO] - Start training...\n(pid=1772) [INFO] - Init my model\n(pid=1772) [INFO] - Created dir for checkpoints. dir=checkpoint\n(pid=1772) [__main__][INFO] - Start training...\n(pid=1772) [INFO] - Init my model\n(pid=1772) [INFO] - Created dir for checkpoints. dir=checkpoint\n(pid=1772) [__main__][INFO] - Start training...\n(pid=1772) [INFO] - Init my model\n(pid=1772) [INFO] - Created dir for checkpoints. dir=checkpoint\nLoaded cached provider configuration\n...\n[HYDRA] Output: receiving file list ... done\n16-32-25/\n16-32-25/0/\n16-32-25/0/checkpoint/\n16-32-25/0/checkpoint/checkpoint_1.pt\n16-32-25/1/\n16-32-25/1/checkpoint/\n16-32-25/1/checkpoint/checkpoint_2.pt\n16-32-25/2/\n16-32-25/2/checkpoint/\n16-32-25/2/checkpoint/checkpoint_3.pt\n...\n[HYDRA] Stopping cluster now. (stop_cluster=true)\n[HYDRA] NOT deleting the cluster (provider.cache_stopped_nodes=true)\n[HYDRA] Running command: ['ray', 'down', '-y', '/var/folders/n_/9qzct77j68j6n9lh0lw3vjqcn96zxl/T/tmpy430k4xr.yaml']\n"))),Object(c.b)("h5",{id:"manage-cluster-lifecycle"},"Manage Cluster LifeCycle"),Object(c.b)("p",null,"You can manage the Ray EC2 cluster lifecycle by configuring the two flags provided by the plugin:"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"Default setting (no need to specify on commandline): Delete cluster after job finishes remotely:")),Object(c.b)("pre",null,Object(c.b)("code",Object(t.a)({parentName:"pre"},{className:"language-commandline"}),"hydra.launcher.stop_cluster=true\nhydra.launcher.ray.cluster.provider.cache_stopped_nodes=False\n")),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"Keep cluster running after jobs finishes remotely")),Object(c.b)("pre",null,Object(c.b)("code",Object(t.a)({parentName:"pre"},{className:"language-commandline"}),"hydra.launcher.stop_cluster=False\n")),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"Power off EC2 instances without deletion")),Object(c.b)("pre",null,Object(c.b)("code",Object(t.a)({parentName:"pre"},{className:"language-commandline"}),"hydra.launcher.ray.cluster.provider.cache_stopped_nodes=true\n")),Object(c.b)("h3",{id:"ray-launcher"},Object(c.b)("inlineCode",{parentName:"h3"},"ray")," launcher"),Object(c.b)("p",null,Object(c.b)("inlineCode",{parentName:"p"},"ray")," launcher lets you launch application on your ray cluster or local machine. You can easily config how your jobs are executed by changing ",Object(c.b)("inlineCode",{parentName:"p"},"ray")," launcher's configuration here\n",Object(c.b)("inlineCode",{parentName:"p"},"~/hydra/plugins/hydra_ray_launcher/hydra_plugins/hydra_ray_launcher/conf/hydra/launcher/ray.yaml")),Object(c.b)("p",null," The ",Object(c.b)("a",Object(t.a)({parentName:"p"},{href:"https://github.com/facebookresearch/hydra/tree/1.0_branch/plugins/hydra_ray_launcher/examples/simple"}),"example application")," starts a new ray cluster. "),Object(c.b)("pre",null,Object(c.b)("code",Object(t.a)({parentName:"pre"},{className:"language-commandline"}),"$ python my_app.py  --multirun hydra/launcher=ray\n[HYDRA] Ray Launcher is launching 1 jobs, sweep output dir: multirun/2020-11-10/15-16-28\n[HYDRA] Initializing ray with config: {}\nINFO services.py:1164 -- View the Ray dashboard at http://127.0.0.1:8266\n[HYDRA]        #0 : \n(pid=97801) [__main__][INFO] - Executing task 1\n")),Object(c.b)("p",null,"You can run the example application on your existing ray cluster as well by overriding ",Object(c.b)("inlineCode",{parentName:"p"},"hydra.launcher.ray.init.address"),":"),Object(c.b)("pre",null,Object(c.b)("code",Object(t.a)({parentName:"pre"},{className:"language-commandline"}),"$ python my_app.py  --multirun hydra/launcher=ray hydra.launcher.ray.init.address=localhost:6379'\n[HYDRA] Ray Launcher is launching 1 jobs, sweep output dir: multirun/2020-11-10/15-13-32\n[HYDRA] Initializing ray with config: {'num_cpus': None, 'num_gpus': None, 'address': 'localhost:6379'}\nINFO worker.py:633 -- Connecting to existing Ray cluster at address: 10.30.99.17:6379\n[HYDRA]        #0 : \n(pid=93358) [__main__][INFO] - Executing task 1\n")),Object(c.b)("h3",{id:"configure-rayinit-and-rayremote"},"Configure ",Object(c.b)("inlineCode",{parentName:"h3"},"ray.init()")," and ",Object(c.b)("inlineCode",{parentName:"h3"},"ray.remote()")),Object(c.b)("p",null,"Ray launcher is built on top of ",Object(c.b)("a",Object(t.a)({parentName:"p"},{href:"https://docs.ray.io/en/master/package-ref.html?highlight=ray.remote#ray-init"}),Object(c.b)("inlineCode",{parentName:"a"},"ray.init()"))," and ",Object(c.b)("a",Object(t.a)({parentName:"p"},{href:"https://docs.ray.io/en/master/package-ref.html?highlight=ray.remote#ray-remote"}),Object(c.b)("inlineCode",{parentName:"a"},"ray.remote()")),". You can configure ",Object(c.b)("inlineCode",{parentName:"p"},"ray")," by overriding ",Object(c.b)("inlineCode",{parentName:"p"},"hydra.launcher.ray.init")," and ",Object(c.b)("inlineCode",{parentName:"p"},"hydra.launcher.ray.remote"),". Check out an ",Object(c.b)("a",Object(t.a)({parentName:"p"},{href:"https://github.com/facebookresearch/hydra/blob/master/plugins/hydra_ray_launcher/examples/simple/config.yaml"}),"example config"),"."))}s.isMDXComponent=!0},268:function(e,n,a){"use strict";a.d(n,"a",(function(){return u})),a.d(n,"b",(function(){return m}));var t=a(0),r=a.n(t);function c(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function i(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function l(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?i(Object(a),!0).forEach((function(n){c(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function o(e,n){if(null==e)return{};var a,t,r=function(e,n){if(null==e)return{};var a,t,r={},c=Object.keys(e);for(t=0;t<c.length;t++)a=c[t],n.indexOf(a)>=0||(r[a]=e[a]);return r}(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(t=0;t<c.length;t++)a=c[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=r.a.createContext({}),s=function(e){var n=r.a.useContext(p),a=n;return e&&(a="function"==typeof e?e(n):l(l({},n),e)),a},u=function(e){var n=s(e.components);return r.a.createElement(p.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},b=r.a.forwardRef((function(e,n){var a=e.components,t=e.mdxType,c=e.originalType,i=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=s(a),b=t,m=u["".concat(i,".").concat(b)]||u[b]||d[b]||c;return a?r.a.createElement(m,l(l({ref:n},p),{},{components:a})):r.a.createElement(m,l({ref:n},p))}));function m(e,n){var a=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var c=a.length,i=new Array(c);i[0]=b;var l={};for(var o in n)hasOwnProperty.call(n,o)&&(l[o]=n[o]);l.originalType=e,l.mdxType="string"==typeof e?e:t,i[1]=l;for(var p=2;p<c;p++)i[p]=a[p];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,a)}b.displayName="MDXCreateElement"}}]);