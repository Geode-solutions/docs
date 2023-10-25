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

# struct MissingFiles


## Members

```cpp
public vector additional_files

```

```cpp
public vector mandatory_files

```



## Functions

### has_missing_files

```cpp
public bool has_missing_files()
```


### operator bool

```cpp
public bool operator bool()
```




