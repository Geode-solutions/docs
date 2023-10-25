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

# struct Constraint


## Members

```cpp
public std::array<bool, 3> locks

```



## Functions

### Constraint

```cpp
public void Constraint()
```


### is_locked

```cpp
public bool is_locked(local_index_t direction)
```


### lock

```cpp
public void lock(local_index_t direction)
```




