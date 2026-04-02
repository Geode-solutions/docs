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

# struct Options


## Members

```cpp
public flat_hash_map block_options

```



## Functions

### Options

```cpp
public void Options(const Options & )
```


### operator=

```cpp
public Options & operator=(const Options & )
```


### Options

```cpp
public void Options()
```


### Options

```cpp
public void Options(Options && )
```


### operator=

```cpp
public Options & operator=(Options && )
```


### ~Options

```cpp
public void ~Options()
```


### ensure_initialized

```cpp
public void ensure_initialized(const BRep & brep)
```


### options

```cpp
public BlockOptions & options(const Block3D & block)
```


### options

```cpp
public const BlockOptions & options(const Block3D & block)
```




