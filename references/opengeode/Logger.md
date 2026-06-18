<script setup>
import {useRoute} from 'vitepress'
const {path} = useRoute()
const tokens = path.split('/')
const words = tokens[2].split('-');
for (let i = 0; i < words.length; i++) {
    words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
    words[i] = words[i].replace('geode', 'Geode')
}
const name = words.join('-');
</script>
# Project {{ name }}

# class Logger


 Custom OpenGeode logger. Can be used with several levels:    Logger::info( "My information is ", 42 );    Logger::warn( "My warning is ", 42, " or more" );



## Functions

### log

```cpp
public static void log(LEVEL level, const Args &... args)
```


### trace

```cpp
public static void trace(const Args &... args)
```


### debug

```cpp
public static void debug(const Args &... args)
```


### info

```cpp
public static void info(const Args &... args)
```


### warn

```cpp
public static void warn(const Args &... args)
```


### error

```cpp
public static void error(const Args &... args)
```


### critical

```cpp
public static void critical(const Args &... args)
```


### level

```cpp
public static LEVEL level()
```


### set_level

```cpp
public static void set_level(LEVEL level)
```




## Enums

| enum class LEVEL |

--

| trace |
| debug |
| info |
| warn |
| err |
| critical |
| off |





