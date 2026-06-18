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

# struct PoissonProcessDescription


## Members

```cpp
public basic_string process_name

```

```cpp
public SpatialDomainConfig<ObjectType::dim> domain

```

```cpp
public std::vector<PoissonSetDescription<ObjectType>> sets

```



## Functions

### add_set

```cpp
public PoissonSetDescription<ObjectType> & add_set(absl::string_view set_name)
```




