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

# class ProgressLoggerManager


## Functions

### ~ProgressLoggerManager

```cpp
public void ~ProgressLoggerManager()
```


### register_client

```cpp
public void register_client(std::unique_ptr<ProgressLoggerClient> && client)
```


### start

```cpp
public void start(const uuid & progress_logger_id, const std::string & message, index_t nb_steps)
```


### update

```cpp
public void update(const uuid & progress_logger_id, index_t current_step, index_t nb_steps)
```


### completed

```cpp
public void completed(const uuid & progress_logger_id)
```


### failed

```cpp
public void failed(const uuid & progress_logger_id)
```




