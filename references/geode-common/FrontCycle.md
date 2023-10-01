# class FrontCycle

```cpp
Defined at ../include/geode/common/cutter/solid/private/front_cycle.h#27
```

```cpp
Inherits from std::list<index_t>
```



## Functions

### position_in_cycle

```cpp
public optional position_in_cycle(index_t vertex)
```

```cpp
Defined at /github/workspace/src/geode/common/cutter/solid/front_cycle.cpp#18
```

### vertex0

```cpp
public index_t vertex0()
```

```cpp
Defined at /github/workspace/src/geode/common/cutter/solid/front_cycle.cpp#33
```

### vertex1

```cpp
public index_t vertex1()
```

```cpp
Defined at /github/workspace/src/geode/common/cutter/solid/front_cycle.cpp#38
```

### previous

```cpp
public index_t previous()
```

```cpp
Defined at /github/workspace/src/geode/common/cutter/solid/front_cycle.cpp#43
```

### next

```cpp
public index_t next()
```

```cpp
Defined at /github/workspace/src/geode/common/cutter/solid/front_cycle.cpp#49
```

### increment

```cpp
public void increment()
```

```cpp
Defined at /github/workspace/src/geode/common/cutter/solid/front_cycle.cpp#59
```

### current

```cpp
public index_t current()
```

```cpp
Defined at /github/workspace/src/geode/common/cutter/solid/front_cycle.cpp#54
```

### vertex_at_position

```cpp
public index_t vertex_at_position(index_t position)
```

```cpp
Defined at /github/workspace/src/geode/common/cutter/solid/front_cycle.cpp#67
```

### is_in_cycle

```cpp
public bool is_in_cycle(index_t vertex)
```

```cpp
Defined at /github/workspace/src/geode/common/cutter/solid/front_cycle.cpp#85
```

### insert_before

```cpp
public void insert_before(index_t vertex, index_t new_vertex)
```

```cpp
Defined at /github/workspace/src/geode/common/cutter/solid/front_cycle.cpp#90
```

### insert_after

```cpp
public void insert_after(index_t vertex, index_t new_vertex)
```

```cpp
Defined at /github/workspace/src/geode/common/cutter/solid/front_cycle.cpp#97
```

### remove_vertex

```cpp
public void remove_vertex(index_t vertex)
```

```cpp
Defined at /github/workspace/src/geode/common/cutter/solid/front_cycle.cpp#161
```

### split_cycle

```cpp
public FrontCycle split_cycle(index_t tie_vertex)
```

```cpp
Defined at /github/workspace/src/geode/common/cutter/solid/front_cycle.cpp#126
```

### tie_vertex

```cpp
public optional tie_vertex()
```

```cpp
Defined at /github/workspace/src/geode/common/cutter/solid/front_cycle.cpp#147
```

### generate_simple_cycles

```cpp
public vector generate_simple_cycles()
```

```cpp
Defined at /github/workspace/src/geode/common/cutter/solid/front_cycle.cpp#167
```



