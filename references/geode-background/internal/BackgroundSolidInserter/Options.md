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
public bool enable_shift_optimization

```

```cpp
public reference_wrapper metric

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
public void Options(const Metric3D & metric_in)
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


### default_metric

```cpp
public const Metric3D & default_metric()
```




