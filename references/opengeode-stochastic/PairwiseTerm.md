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

# class PairwiseTerm


```cpp
Inherits from EnergyTerm<ObjectType>
```



## Functions

### PairwiseTerm

```cpp
public void PairwiseTerm<ObjectType>(std::string_view name, double gamma, std::vector<uuid> && impacted_set_ids, const SpatialDomain<ObjectType::dim> & domain, absl::flat_hash_map<uuid, std::vector<uuid>> && objectset_adjacency_map, std::unique_ptr<PairwiseInteraction<ObjectType>> interaction)
```


### total_log

```cpp
public double total_log(const ObjectSets<ObjectType> & state)
```


### delta_log_add

```cpp
public double delta_log_add(const ObjectSets<ObjectType> & state, const ObjectRef<ObjectType> & new_object)
```


### delta_log_remove

```cpp
public double delta_log_remove(const ObjectSets<ObjectType> & state, const ObjectId & object_id)
```


### delta_log_change

```cpp
public double delta_log_change(const ObjectSets<ObjectType> & state, const ObjectId & old_object_id, const ObjectRef<ObjectType> & new_object)
```


### statistic

```cpp
public double statistic(const ObjectSets<ObjectType> & state)
```




