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

# struct FractureNetworkDescription


## Members

```cpp
public basic_string fnet_name

```

```cpp
public SpatialDomainConfig domain

```

```cpp
public vector fracture_sets

```

```cpp
public double beta_x_node

```

```cpp
public optional expected_x_node

```



## Functions

### add_fracture_set

```cpp
public FractureSetDescription & add_fracture_set(absl::string_view fset_name)
```


### add_x_node_monitoring

```cpp
public void add_x_node_monitoring(double beta)
```


### x_node_interaction_name

```cpp
public std::string x_node_interaction_name()
```


### string

```cpp
public std::string string()
```




