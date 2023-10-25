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

# class FaultsBuilder


# class FaultsBuilder


# class FaultsBuilder


## Functions

### load_faults

```cpp
public void load_faults(string_view directory)
```


### set_fault_type

```cpp
public void set_fault_type(const uuid & fault_id, typename Fault<dimension>::FAULT_TYPE type)
```


### set_fault_name

```cpp
public void set_fault_name(const uuid & id, string_view name)
```


### FaultsBuilder

```cpp
protected void FaultsBuilder<dimension>(Faults<dimension> & faults)
```


### create_fault

```cpp
protected const uuid & create_fault()
```


### create_fault

```cpp
protected const uuid & create_fault(typename Fault<dimension>::FAULT_TYPE type)
```


### create_fault

```cpp
protected void create_fault(uuid fault_id)
```


### create_fault

```cpp
protected void create_fault(uuid fault_id, typename Fault<dimension>::FAULT_TYPE type)
```


### delete_fault

```cpp
protected void delete_fault(const Fault<dimension> & fault)
```


### set_fault_type

```cpp
public void set_fault_type(const uuid & fault_id, typename Fault<dimension>::FAULT_TYPE type)
```

### create_fault

```cpp
protected const uuid & create_fault(typename Fault<dimension>::FAULT_TYPE type)
```

### create_fault

```cpp
protected void create_fault(uuid fault_id, typename Fault<dimension>::FAULT_TYPE type)
```



