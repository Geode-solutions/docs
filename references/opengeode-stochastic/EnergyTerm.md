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

# class EnergyTerm


```cpp
Inherits from Identifier
```



## Functions

### EnergyTerm

```cpp
public void EnergyTerm<ObjectType>(EnergyTerm<ObjectType> && )
```


### EnergyTerm

```cpp
public void EnergyTerm<ObjectType>(const EnergyTerm<ObjectType> & )
```


### operator=

```cpp
public EnergyTerm<ObjectType> & operator=(const EnergyTerm<ObjectType> & )
```


### operator=

```cpp
public EnergyTerm<ObjectType> & operator=(EnergyTerm<ObjectType> && )
```


### EnergyTerm

```cpp
public void EnergyTerm<ObjectType>(std::string_view name, double param, std::vector<uuid> && impacted_set_ids, const SpatialDomain<ObjectType::dim> & domain)
```


### ~EnergyTerm

```cpp
public void ~EnergyTerm<ObjectType>()
```


### parameter

```cpp
public double parameter()
```


### impacted_set_ids

```cpp
public const std::vector<uuid> & impacted_set_ids()
```


### contribution

```cpp
public double contribution(double multiplier)
```


 Energy contribution for a given statistic multiplier

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

### string

```cpp
public std::string string()
```


### is_impacted_set

```cpp
protected bool is_impacted_set(const uuid & set_id)
```


### domain

```cpp
protected const SpatialDomain<ObjectType::dim> & domain()
```


### for_each_object_in_sets

```cpp
protected void for_each_object_in_sets(const ObjectSets<ObjectType> & state, const std::vector<uuid> & set_ids, Func && do_apply)
```


### total_log

```cpp
public double total_log(const ObjectSets<ObjectType> & state)
```

### statistic

```cpp
public double statistic(const ObjectSets<ObjectType> & state)
```



