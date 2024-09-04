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

# class ProgressLogger


## Functions

### ProgressLogger

```cpp
public void ProgressLogger(const std::string & message, index_t nb_steps)
```


### ~ProgressLogger

```cpp
public void ~ProgressLogger()
```


### increment

```cpp
public index_t increment()
```


### increment

```cpp
public index_t increment(index_t nb_increments)
```


### increment_nb_steps

```cpp
public index_t increment_nb_steps()
```


### increment_nb_steps

```cpp
public index_t increment_nb_steps(index_t nb_steps)
```


### set_refresh_interval

```cpp
public void set_refresh_interval(Duration refresh_interval)
```




