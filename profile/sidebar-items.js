initSidebarItems({"fn":[["cpu_span",""],["heartbeat",""],["heartbeat_span",""],["init","Filtering syntax env RA_PROFILE=*             // dump everything env RA_PROFILE=foo|bar|baz   // enabled only selected entries env RA_PROFILE=*@3>10        // dump everything, up to depth 3, if it takes more than 10 ms"],["init_from",""],["memory_usage",""],["span","This function starts a profiling scope in the current execution stack with a given description. It returns a `Profile` struct that measures elapsed time between this method invocation and `Profile` struct drop. It supports nested profiling scopes in case when this function is invoked multiple times at the execution stack. In this case the profiling information will be nested at the output. Profiling information is being printed in the stderr."]],"struct":[["Bytes",""],["Count","Include `_c: Count<Self>` field in important structs to count them."],["CpuSpan","A wrapper around google_cpu_profiler."],["MemoryUsage",""],["Scope","Allows to check if the current code is withing some dynamic scope, can be useful during debugging to figure out why a function is called."],["StopWatch",""],["StopWatchSpan",""]]});