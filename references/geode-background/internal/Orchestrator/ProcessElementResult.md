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

# struct ProcessElementResult


## Members

```cpp
public bool success

```

```cpp
public std::vector<Element> retry_elements

```

```cpp
public std::vector<Element> new_elements

```



## Functions

### ProcessElementResult

```cpp
public void ProcessElementResult()
```


### operator bool

```cpp
public bool operator bool()
```




