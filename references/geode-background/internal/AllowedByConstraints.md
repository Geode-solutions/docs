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

# struct AllowedByConstraints


## Members

```cpp
public bool is_allowed

```

```cpp
public vector forbidden_vertices

```



## Functions

### AllowedByConstraints

```cpp
public void AllowedByConstraints(bool is_allowed_in)
```


### operator bool

```cpp
public bool operator bool()
```




