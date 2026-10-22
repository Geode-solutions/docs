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

# class ScopedLoggerLevel


 Set the Logger level for the lifetime of this object and restore the previous level on destruction, even if an exception is thrown. The Logger level is global: scopes running concurrently in several threads may restore each other's level.



## Functions

### ScopedLoggerLevel

```cpp
public void ScopedLoggerLevel(Logger::LEVEL level)
```


### ~ScopedLoggerLevel

```cpp
public void ~ScopedLoggerLevel()
```


### ScopedLoggerLevel

```cpp
public void ScopedLoggerLevel(const ScopedLoggerLevel & )
```


### operator=

```cpp
public ScopedLoggerLevel & operator=(const ScopedLoggerLevel & )
```


### ScopedLoggerLevel

```cpp
public void ScopedLoggerLevel(ScopedLoggerLevel && )
```


### operator=

```cpp
public ScopedLoggerLevel & operator=(ScopedLoggerLevel && )
```




