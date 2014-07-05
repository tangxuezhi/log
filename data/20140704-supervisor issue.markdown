#Supervisor issue
---

---
ubuntu中安装nodejs后，发现执行命令的时候不能用“node”，需用“nodejs”。之后加入supervisor模块后，执行“supervisor”命令提示错误，不能执行。查看后发现，需要修改安装路径supervisor/lib下的supervisor.js文件，将原有executor从“node”改为“nodejs”，这样就能正常工作了。
