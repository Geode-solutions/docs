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

# class Timer


## Functions

### Timer

```cpp
public void Timer()
```


### Timer

```cpp
public void Timer(Timer && other)
```


### ~Timer

```cpp
public void ~Timer()
```


### raw_duration

```cpp
public Duration raw_duration()
```


### duration

```cpp
public basic_string duration()
```


### reset

```cpp
public void reset()
```




