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

# class LoggerManager


## Functions

### ~LoggerManager

```cpp
public void ~LoggerManager()
```


### register_client

```cpp
public static LoggerClient & register_client(std::unique_ptr<LoggerClient> && client)
```


### trace

```cpp
public static void trace(const std::string & message)
```


### debug

```cpp
public static void debug(const std::string & message)
```


### info

```cpp
public static void info(const std::string & message)
```


### warn

```cpp
public static void warn(const std::string & message)
```


### error

```cpp
public static void error(const std::string & message)
```


### critical

```cpp
public static void critical(const std::string & message)
```




