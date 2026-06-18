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

# struct SimulationContext


## Members

```cpp
public std::unique_ptr<SpatialDomain<ObjectType::dim>> domain

```

```cpp
public std::unique_ptr<ObjectSets<ObjectType>> object_sets

```

```cpp
public std::vector<std::unique_ptr<geode::ObjectSetSampler<ObjectType>>> set_samplers

```

```cpp
public std::unique_ptr<Model<ObjectType>> model

```

```cpp
public std::unique_ptr<geode::MetropolisHastings<ObjectType>> mh_sampler

```



## Functions

### string

```cpp
public std::string string()
```




