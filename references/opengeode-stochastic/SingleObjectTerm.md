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

# class SingleObjectTerm


```cpp
Inherits from EnergyTerm<ObjectType>
```



## Functions

### SingleObjectTerm

```cpp
public void SingleObjectTerm<ObjectType>(std::string_view name, double lambda, std::vector<uuid> && impacted_set_ids, const SpatialDomain<ObjectType::dim> & domain, std::unique_ptr<SingleObjectFeature<ObjectType>> feature)
```


### total_log

```cpp
public double total_log(const ObjectSets<ObjectType> & state)
```


 Energy of the whole configuration: all the objects of the extended domain contribute (consistent with the delta_log_* functions).

### delta_log_add

```cpp
public double delta_log_add(const ObjectSets<ObjectType> & , const ObjectRef<ObjectType> & new_object)
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




