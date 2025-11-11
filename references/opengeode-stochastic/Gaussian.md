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

# struct Gaussian


## Members

```cpp
public double mean

```

```cpp
public double standard_deviation

```



## Functions

### Gaussian

```cpp
public void Gaussian()
```


### is_valid

```cpp
public bool is_valid()
```


### distribution_type_static

```cpp
public NamedType distribution_type_static()
```


### distribution_type

```cpp
public NamedType distribution_type()
```




