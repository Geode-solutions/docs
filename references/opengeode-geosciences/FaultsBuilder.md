# class FaultsBuilder

```cpp
Defined at /github/workspace/src/geode/geosciences/explicit/mixin/builder/faults_builder.cpp#87
```

# class FaultsBuilder

```cpp
Defined at /github/workspace/src/geode/geosciences/explicit/mixin/builder/faults_builder.cpp#86
```

# class FaultsBuilder

```cpp
Defined at ../include/geode/geosciences/explicit/mixin/builder/faults_builder.h#39
```

## Functions

### load_faults

```cpp
public void load_faults(string_view directory)
```

```cpp
Defined at /github/workspace/src/geode/geosciences/explicit/mixin/builder/faults_builder.cpp#64
```

### set_fault_type

```cpp
public void set_fault_type(const uuid & fault_id, typename Fault<dimension>::FAULT_TYPE type)
```

```cpp
Defined at /github/workspace/src/geode/geosciences/explicit/mixin/builder/faults_builder.cpp#70
```

### set_fault_name

```cpp
public void set_fault_name(const uuid & id, string_view name)
```

```cpp
Defined at /github/workspace/src/geode/geosciences/explicit/mixin/builder/faults_builder.cpp#78
```

### FaultsBuilder

```cpp
protected void FaultsBuilder<dimension>(Faults<dimension> & faults)
```

```cpp
Defined at ../include/geode/geosciences/explicit/mixin/builder/faults_builder.h#50
```

### create_fault

```cpp
protected const uuid & create_fault()
```

```cpp
Defined at /github/workspace/src/geode/geosciences/explicit/mixin/builder/faults_builder.cpp#31
```

### create_fault

```cpp
protected const uuid & create_fault(typename Fault<dimension>::FAULT_TYPE type)
```

```cpp
Defined at /github/workspace/src/geode/geosciences/explicit/mixin/builder/faults_builder.cpp#37
```

### create_fault

```cpp
protected void create_fault(uuid fault_id)
```

```cpp
Defined at /github/workspace/src/geode/geosciences/explicit/mixin/builder/faults_builder.cpp#44
```

### create_fault

```cpp
protected void create_fault(uuid fault_id, typename Fault<dimension>::FAULT_TYPE type)
```

```cpp
Defined at /github/workspace/src/geode/geosciences/explicit/mixin/builder/faults_builder.cpp#50
```

### delete_fault

```cpp
protected void delete_fault(const Fault<dimension> & fault)
```

```cpp
Defined at /github/workspace/src/geode/geosciences/explicit/mixin/builder/faults_builder.cpp#57
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



