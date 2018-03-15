Search.setIndex({docnames:["api","basics","curio-client","curio-server","index","iocs","references","release-notes","threading-client"],envversion:53,filenames:["api.rst","basics.rst","curio-client.rst","curio-server.rst","index.rst","iocs.rst","references.rst","release-notes.rst","threading-client.rst"],objects:{"caproto.AccessRightsResponse":{access_rights:[0,2,1,""],cid:[0,2,1,""]},"caproto.Broadcaster":{log:[0,2,1,""],new_search_id:[0,3,1,""],our_role:[0,2,1,""],process_commands:[0,3,1,""],recv:[0,3,1,""],register:[0,3,1,""],search:[0,3,1,""],send:[0,3,1,""]},"caproto.ClearChannelRequest":{cid:[0,2,1,""],sid:[0,2,1,""]},"caproto.ClearChannelResponse":{cid:[0,2,1,""],sid:[0,2,1,""]},"caproto.ClientChannel":{client_name:[0,3,1,""],create:[0,3,1,""],disconnect:[0,3,1,""],host_name:[0,3,1,""],read:[0,3,1,""],subscribe:[0,3,1,""],unsubscribe:[0,3,1,""],version:[0,3,1,""],write:[0,3,1,""]},"caproto.ClientNameRequest":{name:[0,2,1,""]},"caproto.CreateChFailResponse":{cid:[0,2,1,""]},"caproto.ErrorResponse":{cid:[0,2,1,""],status_code:[0,2,1,""]},"caproto.EventAddRequest":{data_count:[0,2,1,""],data_type:[0,2,1,""],high:[0,2,1,""],low:[0,2,1,""],mask:[0,2,1,""],sid:[0,2,1,""],subscriptionid:[0,2,1,""],to:[0,2,1,""]},"caproto.EventAddResponse":{data:[0,2,1,""],data_count:[0,2,1,""],data_type:[0,2,1,""],sid:[0,2,1,""],status_code:[0,2,1,""],subscriptionid:[0,2,1,""]},"caproto.EventCancelRequest":{data_type:[0,2,1,""],sid:[0,2,1,""],subscriptionid:[0,2,1,""]},"caproto.EventCancelResponse":{data_type:[0,2,1,""],sid:[0,2,1,""],subscriptionid:[0,2,1,""]},"caproto.HostNameRequest":{name:[0,2,1,""]},"caproto.NotFoundResponse":{cid:[0,2,1,""],version:[0,2,1,""]},"caproto.ReadNotifyRequest":{data_count:[0,2,1,""],data_type:[0,2,1,""],ioid:[0,2,1,""],sid:[0,2,1,""]},"caproto.ReadNotifyResponse":{data:[0,2,1,""],data_count:[0,2,1,""],data_type:[0,2,1,""],ioid:[0,2,1,""],metadata:[0,2,1,""],status:[0,2,1,""]},"caproto.RepeaterConfirmResponse":{repeater_address:[0,2,1,""]},"caproto.RepeaterRegisterRequest":{client_address:[0,2,1,""]},"caproto.RsrvIsUpResponse":{address:[0,2,1,""],address_string:[0,2,1,""],beacon_id:[0,2,1,""],server_port:[0,2,1,""],version:[0,2,1,""]},"caproto.SearchRequest":{cid:[0,2,1,""],name:[0,2,1,""],payload_size:[0,2,1,""],reply:[0,2,1,""],version:[0,2,1,""]},"caproto.SearchResponse":{cid:[0,2,1,""],ip:[0,2,1,""],port:[0,2,1,""],version:[0,2,1,""]},"caproto.ServerChannel":{create:[0,3,1,""],create_fail:[0,3,1,""],disconnect:[0,3,1,""],read:[0,3,1,""],subscribe:[0,3,1,""],unsubscribe:[0,3,1,""],version:[0,3,1,""],write:[0,3,1,""]},"caproto.ServerDisconnResponse":{cid:[0,2,1,""]},"caproto.VersionRequest":{priority:[0,2,1,""],version:[0,2,1,""]},"caproto.VersionResponse":{version:[0,2,1,""]},"caproto.VirtualCircuit":{disconnect:[0,3,1,""],host:[0,2,1,""],key:[0,2,1,""],log:[0,2,1,""],new_channel_id:[0,3,1,""],new_ioid:[0,3,1,""],new_subscriptionid:[0,3,1,""],our_role:[0,2,1,""],port:[0,2,1,""],process_command:[0,3,1,""],recv:[0,3,1,""],send:[0,3,1,""]},"caproto.WriteNotifyRequest":{data:[0,2,1,""],data_count:[0,2,1,""],data_type:[0,2,1,""],ioid:[0,2,1,""],metadata:[0,2,1,""],sid:[0,2,1,""]},"caproto.WriteNotifyResponse":{data_count:[0,2,1,""],data_type:[0,2,1,""],ioid:[0,2,1,""],sid:[0,2,1,""],status:[0,2,1,""]},caproto:{AWAIT_CREATE_CHAN_RESPONSE:[0,0,1,""],AWAIT_SEARCH_RESPONSE:[0,0,1,""],AWAIT_VERSION_RESPONSE:[0,0,1,""],AccessRightsResponse:[0,1,1,""],Broadcaster:[0,1,1,""],CLIENT:[0,0,1,""],CLOSED:[0,0,1,""],CONNECTED:[0,0,1,""],ChannelType:[0,1,1,""],ClearChannelRequest:[0,1,1,""],ClearChannelResponse:[0,1,1,""],ClientChannel:[0,1,1,""],ClientNameRequest:[0,1,1,""],CreateChFailResponse:[0,1,1,""],DISCONNECTED:[0,0,1,""],EchoRequest:[0,1,1,""],EchoResponse:[0,1,1,""],ErrorResponse:[0,1,1,""],EventAddRequest:[0,1,1,""],EventAddResponse:[0,1,1,""],EventCancelRequest:[0,1,1,""],EventCancelResponse:[0,1,1,""],EventsOffRequest:[0,1,1,""],EventsOnRequest:[0,1,1,""],FAILED:[0,0,1,""],HostNameRequest:[0,1,1,""],IDLE:[0,0,1,""],LocalProtocolError:[0,1,1,""],MUST_CLOSE:[0,0,1,""],NEED_DATA:[0,0,1,""],NotFoundResponse:[0,1,1,""],REQUEST:[0,0,1,""],RESPONSE:[0,0,1,""],ReadNotifyRequest:[0,1,1,""],ReadNotifyResponse:[0,1,1,""],ReadRequest:[0,1,1,""],ReadResponse:[0,1,1,""],ReadSyncRequest:[0,1,1,""],RemoteProtocolError:[0,1,1,""],RepeaterConfirmResponse:[0,1,1,""],RepeaterRegisterRequest:[0,1,1,""],RsrvIsUpResponse:[0,1,1,""],SEND_CREATE_CHAN_REQUEST:[0,0,1,""],SEND_CREATE_CHAN_RESPONSE:[0,0,1,""],SEND_SEARCH_REQUEST:[0,0,1,""],SEND_SEARCH_RESPONSE:[0,0,1,""],SEND_VERSION_REQUEST:[0,0,1,""],SEND_VERSION_RESPONSE:[0,0,1,""],SERVER:[0,0,1,""],SearchRequest:[0,1,1,""],SearchResponse:[0,1,1,""],ServerChannel:[0,1,1,""],ServerDisconnResponse:[0,1,1,""],VersionRequest:[0,1,1,""],VersionResponse:[0,1,1,""],VirtualCircuit:[0,1,1,""],WriteNotifyRequest:[0,1,1,""],WriteNotifyResponse:[0,1,1,""],WriteRequest:[0,1,1,""]}},objnames:{"0":["py","data","Python data"],"1":["py","class","Python class"],"2":["py","attribute","Python attribute"],"3":["py","method","Python method"]},objtypes:{"0":"py:data","1":"py:class","2":"py:attribute","3":"py:method"},terms:{"31ida":[1,2],"abstract":1,"byte":[0,1,4],"case":[1,4],"char":0,"class":[0,5],"default":[0,5],"enum":[0,3],"final":1,"float":0,"function":[1,2,4,8],"import":[0,1,2,3,4,5,8],"int":[0,3,5],"long":0,"new":[0,1,2,3,4,5],"return":[0,1,5],"super":5,"true":[0,2],"try":[1,2,5],And:[0,4],But:[1,4],For:[0,4],IDs:1,Its:[1,4],PVs:[2,5],That:4,The:[1,2,3,4,7,8],Their:4,There:[1,4],These:[0,1,6],Use:[0,4],Using:1,With:0,__init__:[0,5],__main__:5,__name__:5,__repr__:0,_context:5,_dflt_context:5,abandon:4,abc:5,abid:1,about:[0,6],abov:[1,4],acceler:4,accept:[0,1],access:[0,2,3,6,8],access_respons:1,access_right:[0,1],accessright:1,accessrightsrespons:[0,1],actual:1,add:5,addit:[0,1,4],address:[0,1,3,5],address_str:0,adher:1,advantag:4,af_inet:1,affect:1,affirm:0,after:0,again:1,against:[0,1],aim:4,alarm:0,all:[0,1,2,4],alloc:0,allow:0,alreadi:[2,4,8],also:[0,1],alwai:[0,1],andrew:6,ani:[0,1,4],announc:[0,1],anoth:0,answer:[0,1],anyth:1,api:[1,4],append:2,appropri:0,arg:5,argument:[0,5],argv:5,around:4,arrai:[0,1,4],arriv:1,asid:1,ask:1,assert:2,assign:[0,5],associ:3,async:[2,3,5],asynchron:[1,4],asyncio:4,attr:5,attribut:0,authent:1,author:4,auto:1,auto_monitor:5,automat:[0,1],avaail:1,avail:1,await:[2,3,5],await_create_chan_respons:0,await_search_respons:0,await_version_respons:0,back:4,background:[2,8],base:[2,4,5,6],basic:[0,4],battl:4,bcast_socket:1,beacon:0,beacon_id:0,beamlin:5,beazlei:6,becaus:1,becom:1,been:[0,1,4],befor:[0,1,2,8],begin:[1,2,3],being:0,benchmark:4,better:[1,4],between:[0,1,4],beyond:4,big:1,bigendianstructur:0,bin:5,binari:6,blog:6,bookkeep:4,borrow:0,both:[0,1],branch:6,bring:4,broad:4,broadcast:[1,4,5],bsd:[1,4],buffer:0,buffers_to_send:[0,1],bug:4,build:[0,4],built:[0,4],builtin:1,bytearrai:1,bytes_receiv:1,bytes_to_send:[0,1],byteslik:0,c392af11430d:5,cach:5,caget:[4,8],call:[0,1,2,3,4,5],callback:5,caller:[0,4],camonitor:4,can:[0,1,2,4],caproto:[0,1,2,3,5,8],caprotoerror:0,caprotokeyerror:0,caput:[4,8],care:1,casever:1,castatuscod:1,chan1:2,chan2:2,chan:1,chang:[0,1],channel:[2,3,6,8],channeldoubl:3,channelenum:3,channelinteg:3,channeltyp:[0,1],channnel:0,check:[0,1],chnage:0,choic:[4,5],choos:1,cid:[0,1],circuit:[0,1,4],circuitst:0,class_nam:0,claus:4,clean:1,clear:1,clearchannelrequest:[0,1],clearchannelrespons:[0,1],clever:4,cli:[2,8],click:0,client:[0,4,5,7],client_address:0,client_nam:[0,1],clientchannel:[0,1],clientnamerequest:[0,1],clog:1,close:0,code:[0,1,4,6,7],code_with_sever:1,codebas:4,collect:[1,2,5],com:0,come:1,command:[1,2,4,5],commun:[0,1,4],compani:4,companion:0,compar:0,comparison:1,complet:[0,1,4],compos:[1,5],compound:0,concept:[1,4,6],concurr:4,condens:1,configur:1,confirm:0,congest:0,connect:[0,1,2,5],connection_callback:5,connection_timeout:5,consist:0,constant:4,context:[2,3,5],control:[0,4],conveni:[0,1],convention:1,convert:0,copi:[1,4],core:[4,7],correctli:4,correspond:0,could:1,count:[0,1,5],counter:5,cours:4,cover:4,creat:[0,2,3],create_chan_respons:1,create_channel:2,create_connect:1,create_fail:0,createchanrequest:[0,1],createchanrespons:[0,1],createchfailrespons:0,creation:0,crucial:4,ctrl_char:0,ctrl_doubl:0,ctrl_enum:0,ctrl_float:0,ctrl_int:0,ctrl_long:0,ctrl_string:0,ctx:[2,3],ctype:0,curio:[2,3,4,5],current:[0,1],custom:4,custom_writ:5,customwrit:5,d942c0c2e3b2:5,darwin:1,data:[1,2,4],data_count:[0,1],data_typ:[0,1],databas:0,datagram:[0,1],david:6,davidsav:6,dbe_alarm:0,dbe_properti:0,dbe_valu:0,dbr:0,dbr_time_doubl:0,dbr_type:0,debug:4,def:[1,2,5],default_protocol_vers:0,defens:4,defin:3,defunct:1,demonstr:1,depend:4,dependeni:[2,3],deprec:0,depth:6,dequ:1,describ:0,descript:1,design:[0,1,4],desir:0,detail:[0,1],detector:5,determin:1,develop:[4,6],devic:4,dictionari:3,did:1,diff:5,differ:[1,4,5],direct:0,directli:[0,1,4],directori:5,disconnect:[0,1,2],distribut:4,document:[4,6],doe:[0,1],doesn:1,doing:0,don:1,done:[1,5],doodl:3,doubl:[0,1],drive:4,dtype:[0,5],each:[0,1,4],easi:[1,4],easier:1,eca_norm:1,echo:0,echorequest:0,echorespons:0,effort:4,either:1,element:[0,1],enabl:4,encapsul:[0,1,3],encapul:0,encod:[0,1,4],end:[0,1],endian:1,ensur:1,enum_str:3,enumer:0,env:5,environ:1,epic:[0,1,2,4,6,8],epics_ca_addr_list:1,epics_ca_auto_addr_list:1,equival:[0,1],era:4,error:[0,4],error_messag:0,errorrespons:0,etc:1,evan:6,event:0,eventaddrequest:[0,1],eventaddrespons:[0,1],eventcancelrequest:[0,1],eventcancelrespons:[0,1],eventsoffrequest:0,eventsonrequest:0,everi:[0,1],exactli:0,exampl:[0,1,2,3,4],example1:5,example2:5,example3:5,example4:5,example5:5,example6:5,except:[4,5],exercis:4,exist:1,expand:0,expect:[0,1],experi:1,experiment:[4,7],explor:4,extra:4,extract_address:1,facilit:1,fact:4,fail:0,failur:0,fairli:[4,7],fals:1,famili:4,familiar:8,fast:4,faster:4,field:0,file:4,filenam:5,fill:[0,1,5],find_next_tcp_port:3,first:[0,1],flavor:1,follow:1,form:5,format:5,formula:6,found:1,framework:[2,3],fresh:[0,1],from:[0,1,2,3,4,5,8],fulli:0,fun:4,fund:4,gener:[0,1,4,5],get:[0,4,5,8],get_address_list:1,get_circuit:5,get_pv:[5,8],gethostbynam:0,gethostnam:0,getpass:0,getus:0,give:[0,1,4],given:[0,1,3],going:1,gr_char:0,gr_doubl:0,gr_enum:0,gr_float:0,gr_int:0,gr_long:0,gr_string:0,greater:4,grow:4,h11:[0,4,6],hand:4,handl:[0,1,4,5,6],hard:0,has:[0,1,2,4],hasattr:1,have:[0,1],header:0,heartbeat:[0,1],help:1,here:[0,1,2,3],hex:1,high:[0,1],high_level_serv:5,higher:1,highest:0,highli:7,hold:0,homebrew:6,homog:0,host:[0,1],host_nam:[0,1],hostnamerequest:[0,1],how:1,human:4,hurrai:1,identif:0,identifi:0,idl:0,ignor:1,illeg:[0,1],implement:[0,1,2,3,4,7,8],implicitli:5,incident:1,includ:[0,1,4],incom:[1,4],increment:0,independ:1,indexerror:5,indic:0,indispens:4,individu:[0,1],industri:4,inherit:0,initi:[0,1,4,5,7],inlin:4,inline_styl:5,inlinestyleioc:5,input:4,insid:0,inspir:4,instal:[1,2,3,4],instanc:[0,5],instanti:[0,1,5],instead:[0,4],integ:[0,1],integr:4,interact:0,interest:1,interfac:[1,4,8],intern:[0,1],interpret:1,introduc:4,introduct:4,introspect:4,ioc:4,ioid:[0,1],ipython:5,iter:0,its:[0,1,4],itself:[1,4],job:1,johnson:6,juggl:1,just:1,kah:4,keep:[0,4],kei:0,ken:6,kenneth:6,keyerror:0,kwarg:5,laboratori:4,larg:4,last:5,lauer:6,layer:0,layout:4,lazi:5,learn:4,least:1,length:0,let:[0,1],level:[0,1],lib:5,libca:4,librari:1,licens:4,like:[0,1,4],limit:0,line:[4,5],link:4,list:[0,1,4,5],load:0,localhost:1,localprotocolerror:[0,1],locat:1,log:[0,4],logger:0,look:[0,1],lost:0,low:[0,1],lower_alarm_limit:3,lower_ctrl_limit:3,lower_disp_limit:3,lower_warning_limit:3,lowest:0,lyric:1,machin:[1,4],macro:4,macroifiednam:5,mai:[0,1,2,3,4,8],main:2,maintain:0,make:[1,2,3,4],manag:[0,4],mani:[0,4],manual:1,map:3,mask:[0,1],match:[0,1],matrix:1,mean:[0,1,4],meet:4,memoryview:1,messag:[0,1,4],messagehead:0,metadata:[0,1,3],method:[0,1],michael:6,might:[0,1],mirror:4,mit:4,model:[0,4],modul:[4,5],monitor:4,more:[0,1,4],moreov:4,most:5,motor:[1,4],motorsim:[1,2,4,6],move:1,mtr:[1,2],much:1,multipl:1,must:[0,1],must_clos:0,my_beamlin:5,my_read:5,my_writ:5,name:[0,1,3,4],nativ:[0,1],native_data_count:0,native_data_typ:0,ndarrai:[0,1],need:[0,1,2,3],need_data:0,neg:0,neo:1,network:[1,4,6],new_channel_id:0,new_ioid:0,new_search_id:0,new_subscriptionid:0,next:[1,4,7],no_repli:0,none:[0,1],normal:1,note:4,notfoundrespons:0,notic:[0,1],notif:0,notifc:0,notifi:0,now:[1,5],num_bytes_need:0,number:[0,5],numpi:[0,1,4],obei:1,obj:0,object:[1,2,3,4,8],observ:5,obtain:0,obviou:0,off:[0,4],old:1,onc:1,one:[0,1,2,4,8],ones:1,onli:[0,1,5],opaqu:0,open:[0,1,5],optimizi:4,option:[0,1,3,4,6],order:0,organ:4,orient:8,origin:0,original_request:0,osx:6,other:[0,1],our:[0,1,2],our_rol:[0,1],out:[0,1,2],outgo:[1,4],output:[0,4],over:[0,1,4],overflow:6,overload:1,owes:4,own:4,pack:0,packag:[4,5],packet:0,pad:0,paramet:[0,1],parameter1:0,parameter2:0,pars:[0,1,4,6],part:0,particl:4,particular:1,pass:[0,1,3,4],patch:4,path:5,pathlib:5,pattern:[1,4],payload:[1,4],payload_s:0,peer:[0,1],per:0,permiss:1,physic:4,pip:[2,3],placeholder1:5,placeholder2:5,plai:[0,1,4],plugin:6,polic:1,port:[0,1],post:6,potenti:4,precis:3,prefix:5,previou:1,primari:4,principl:4,print:[2,5],priorit:0,prioriti:[0,1,5],probabl:4,process:[0,1,2,4,5,8],process_command:[0,1],program:[2,3,4],project:[0,4,6],pronounc:4,properli:1,protcol:6,proto:4,protocol:[0,1,7],protocol_vers:0,protocolerror:0,provid:[0,1,2,4,8],publish:4,pure:1,purpos:4,put:[5,8],putter:5,pv1:2,pv2:2,pv_name:5,pvcontext:5,pvdb:[3,5],pvgroup:5,pvname:[5,8],pvproperti:5,pvspec:5,pyepic:[4,5,6],python3:5,python:[0,2,3,6],queri:0,queue:0,quick:1,rais:[0,1,5],randint:5,random:5,random_int:5,random_str:5,rang:1,rare:1,rather:0,rational:4,raw:1,rbv:5,read:[0,2,4],read_from_bytestream:0,readi:[0,4],reading_count:5,readingcount:5,readnotifyrequest:[0,1],readnotifyrespons:[0,1],readrequest:0,readrespons:0,readsyncrequest:0,reagan:4,realli:1,reapeat:8,rebroadcast:1,recal:1,receipt:0,receiv:[0,1,2,5],recent:5,record:[0,1],recv:[0,1],recv_address:1,recvfrom:1,reduc:4,refer:[0,4],regist:[0,2],register_user_callback:2,registr:0,relat:4,releas:4,remot:0,remoteprotocolerror:[0,1],repeat:[0,2,8],repeater_address:0,repeaterconfirmrespons:0,repeaterregisterrequest:[0,1],repli:0,report:[0,1],repres:0,req:1,request:[0,1,2,5],requir:[0,1,2,3,4],resolv:0,resourc:[4,6],respect:[0,1],respond:[0,4],respons:[0,1,2],restor:0,result:[2,5],reus:1,reusabl:4,revers:1,right:[0,1,4],robust:4,role:[0,1],root:4,rsrvisuprespons:0,rule:1,run:[2,3,5,8],sai:[1,4],same:[0,1,5],san:[1,4,6],scalar:0,scrape:4,search:[0,2,5],search_respons:1,search_result:5,searchrequest:[0,1],searchrespons:[0,1],second:5,section:1,secur:1,see:[0,1,4],seen:0,self:5,send:[0,1,2],send_create_chan_request:0,send_create_chan_respons:0,send_search_request:0,send_search_respons:0,send_version_request:0,send_version_respons:0,sendmsg:1,sendto:1,sent:[0,1],sentinel:0,separ:[2,3,4],sequenti:0,serach:1,serv:[0,1,4],server:[0,1,4,5,7],server_port:0,serverchannel:0,serverdisconnrespons:0,set:[1,2],setsockopt:1,sever:[0,1],should:[0,1,2,8],show:1,sid:[0,1],side:0,similarli:0,simpl:[0,1,4,8],simple_ioc:5,simpleioc:5,simplifi:4,simul:[1,4],singl:[0,1],singleton:0,site:5,slide:6,so_broadcast:1,so_reuseaddr:1,so_reuseport:1,sock:1,sock_dgram:1,socket:[0,1,4,6],sol_socket:1,some:[0,1,2,4],someth:[0,1],somewhat:1,sort:0,sourc:[0,6],speak:4,spec:[0,6],special:4,specif:[0,1],specifi:[0,1,4],spell:1,split:1,stabl:7,stack:6,stage:4,standard:4,star:4,start:[0,2,3,8],start_serv:5,stash:1,state:[1,4],statu:[0,1],status_cod:[0,1],step:1,still:1,stori:1,str:5,strateg:4,string:[0,5],struct:[0,4],structur:0,sts_char:0,sts_doubl:0,sts_enum:0,sts_float:0,sts_int:0,sts_long:0,sts_string:0,stsack_str:0,style:4,submit:4,subscrib:[0,2],subscript:[0,1,2],subscriptionid:[0,1],subscriptiontyp:0,success:[0,1],succinct:1,succinctli:1,support:[1,4],sync:4,synchron:1,synchrotron:4,syntax:[2,3],sys:5,system:[0,1,4],take:[0,4],talk:[1,4,6],talli:4,task:3,tbl:[1,2],tcp:[0,1],tech:6,telescop:4,tell:0,templat:4,temporarili:0,term:[0,1],test:[0,2,4],than:4,thei:[0,4],them:[0,1],themselv:0,thi:[0,1,3,5,6],thing:[1,5],think:0,those:1,thread:[4,5],through:0,time:[0,1,4,5],time_char:0,time_doubl:0,time_enum:0,time_float:0,time_int:0,time_long:0,time_str:0,timeout:5,timeouterror:5,timestamp:5,tmp:5,todo:5,togeth:[0,1],too:1,toolkit:4,top:4,traceback:5,track:[0,1,4],trade:4,traffic:[1,6],transact:0,transcript:4,translat:1,transmit:[0,1],transport:[1,4,5],tri:0,trick:[0,4],tune:[4,6],tupl:[0,1],turn:0,two:[0,1,2,5],type:[1,4],typic:1,udp:[0,1],udp_sock:1,uncov:4,under:[0,4],understand:4,uniqu:[0,1],unit:[3,4],unless:1,unlimit:0,unsubscrib:[0,1,2],until:1,unus:0,updat:[0,4],upper_alarm_limit:3,upper_ctrl_limit:3,upper_disp_limit:3,upper_warning_limit:3,upstream:4,usag:5,use:[0,1,2,3,8],used:[0,1,2,4],useful:[0,4,6],user:[0,1,2,8],user_callback:2,uses:0,using:[0,1,2,3,5,8],usr:5,val:[1,2,5],valid:[0,1,4],valu:[0,3,5],variabl:1,variou:[0,4],verbos:5,veri:4,verifi:[1,2],version:[0,1],version_respons:1,versionrequest:[0,1],versionrespons:[0,1],via:1,view:0,violat:0,virtual:[0,1,4],virtualcircuit:[1,4],virtualciruit:0,virtualenv:5,wai:[0,1,4],wait:[2,5],wait_for_connect:[2,5,8],want:1,war:4,watch:1,waveform:4,were:[4,6],what:[0,1],when:[0,1,2,4],whether:0,which:[0,1,2,4],whichev:5,why:1,wire:1,wireshark:6,without:2,word:1,work:[0,1],world:4,would:[1,4],wrap:4,writabl:5,write:[0,2,4],writenotifyrequest:[0,1],writenotifyrespons:[0,1],writerequest:0,written:4,wrote:5,x00:1,x00xf:1,x01:1,x05:1,x06:1,x11:1,x18:1,x7f:1,xf11id:5,yet:0,you:[0,1,2,3,8],young:4,your:[0,4]},titles:["API Documentation","Writing Your Own Channel Access Client","Asynchronous Client","Asynchronous Server","caproto: a pure-Python Channel Access protocol library","Input-Output Controllers","References","Release Notes","Thread-based Client Mirroring pyepics API"],titleterms:{The:0,access:[1,4],acknowledg:4,api:[0,8],asynchron:[2,3],base:8,basic:1,bookkeep:1,broadcast:0,caproto:4,channel:[0,1,4],client:[1,2,8],close:1,command:0,constant:0,content:[0,4],control:5,creat:1,custom:5,data:0,document:0,each:5,event:1,except:0,file:5,how:4,inlin:5,input:5,ioc:5,know:4,librari:4,machin:0,macro:5,mirror:8,name:5,note:7,object:0,output:5,own:1,payload:0,perform:4,protocol:4,pure:4,pyepic:8,python:4,read:[1,5],refer:6,regist:1,releas:7,repeat:1,search:1,server:3,should:4,simpl:5,simplifi:1,special:0,state:0,statist:4,style:5,subscrib:1,talli:5,thi:4,thread:8,type:0,updat:[1,5],use:4,valu:1,virtualcircuit:0,vital:4,when:5,why:4,work:4,write:[1,5],written:5,you:4,your:1}})