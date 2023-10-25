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

### level

```cpp
public Level level()
```


### set_level

```cpp
public void set_level(Level level)
```


### trace

```cpp
public void trace(const Args &... args)
```


### debug

```cpp
public void debug(const Args &... args)
```


### info

```cpp
public void info(const Args &... args)
```


### warn

```cpp
public void warn(const Args &... args)
```


### error

```cpp
public void error(const Args &... args)
```


### critical

```cpp
public void critical(const Args &... args)
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





