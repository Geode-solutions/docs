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
public void EnergyTerm<ObjectType>(const EnergyTerm<ObjectType> & )
```


### operator=

```cpp
public EnergyTerm<ObjectType> & operator=(const EnergyTerm<ObjectType> & )
```


### EnergyTerm

```cpp
public void EnergyTerm<ObjectType>(EnergyTerm<ObjectType> && )
```


### operator=

```cpp
public EnergyTerm<ObjectType> & operator=(EnergyTerm<ObjectType> && )
```


### EnergyTerm

```cpp
public void EnergyTerm<ObjectType>(basic_string_view name, double param, std::vector<uuid> && targeted_set_ids, const SpatialDomain<ObjectType::dim> & domain)
```


### ~EnergyTerm

```cpp
public void ~EnergyTerm<ObjectType>()
```


### parameter

```cpp
public double parameter()
```


### targeted_set_ids

```cpp
public const std::vector<uuid> & targeted_set_ids()
```


### contribution

```cpp
public double contribution(double multiplier)
```


 Energy contribution for a given statistic multiplier

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

### string

```cpp
public basic_string string()
```


### is_targeted_set

```cpp
protected bool is_targeted_set(const uuid & set_id)
```


### domain

```cpp
protected const SpatialDomain<ObjectType::dim> & domain()
```


### for_each_targeted_object

```cpp
protected void for_each_targeted_object(const ObjectSets<ObjectType> & state, Func && do_apply)
```




