# class Logger

```cpp
Defined at ../../include/geode/basic/logger.h#39
```

 Custom OpenGeode logger. Can be used with several levels:    Logger::info( "My information is ", 42 );    Logger::warn( "My warning is ", 42, " or more" );



## Functions

### level

```cpp
public Level level()
```

```cpp
Defined at /github/workspace/src/geode/basic/logger.cpp#106
```

### set_level

```cpp
public void set_level(Level level)
```

```cpp
Defined at /github/workspace/src/geode/basic/logger.cpp#111
```

### trace

```cpp
public void trace(const Args &... args)
```

```cpp
Defined at ../../include/geode/basic/logger.h#58
```

### debug

```cpp
public void debug(const Args &... args)
```

```cpp
Defined at ../../include/geode/basic/logger.h#64
```

### info

```cpp
public void info(const Args &... args)
```

```cpp
Defined at ../../include/geode/basic/logger.h#70
```

### warn

```cpp
public void warn(const Args &... args)
```

```cpp
Defined at ../../include/geode/basic/logger.h#76
```

### error

```cpp
public void error(const Args &... args)
```

```cpp
Defined at ../../include/geode/basic/logger.h#82
```

### critical

```cpp
public void critical(const Args &... args)
```

```cpp
Defined at ../../include/geode/basic/logger.h#88
```



## Enums

| enum class Level |

--

| trace |
| debug |
| info |
| warn |
| err |
| critical |
| off |


```cpp
Defined at ../../include/geode/basic/logger.h#42
```



