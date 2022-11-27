<template>
  <div class="home">
    <div class="con">
      <header class="header">
        <img :src="img" alt="" />
        <div class="title">To-Do List</div>
      </header>
      <div class="form-field">
        <h1 class="titleTwo">~ Today I need to ~</h1>
        <div class="form-wrapper">
          <div class="form-input">
            <input
              v-model="inp"
              @keydown.13="add"
              placeholder="Add new todo..."
              class="inp"
            />
          </div>
          <button @click="add()" class="submit-btn">
            <span class="btn">Submit</span>
          </button>
        </div>
      </div>
      <ul class="ul">
        <li v-for="(item, i) in arr" :key="i" :class="{ active: item.check }">
          <span>
            <input type="checkbox" v-model="item.check" />
            <span :class="{ xian: item.check }">{{ item.title }}</span>
          </span>
          <span @click="del(i)">×</span>
        </li>
      </ul>
      <div>
        <div class="msg" v-if="list.length == 0">
          Congrat, you have no more tasks to do
        </div>
        <div class="msga" v-else>
          <span>{{ num }} item left</span>
          <span @click="falg = 'All'" :class="{ xz: falg == 'All' }">All</span>
          <span
            v-show="flag.flag1 && flag.flag2"
            @click="falg = 'Active'"
            :class="{ xz: falg == 'Active' }"
            >Active</span
          >
          <span
            v-show="flag.flag1 && flag.flag2"
            @click="falg = 'Completed'"
            :class="{ xz: falg == 'Completed' }"
            >Completed</span
          >
          <span
            v-show="flag.flag1"
            @click="dels"
            :class="{ xz: falg == 'Clear completed' }"
            >Clear completed</span
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import img from "../assets/note.75134fb0.svg";
export default {
  data() {
    return {
      img: img,
      list: [],
      inp: "",
      falg: "All",
    };
  },
  methods: {
    add() {
      if (this.inp == "") return;
      this.list.push({
        check: false,
        title: this.inp,
      });
      this.inp = "";
      console.log(this.list);
    },
    del(i) {
      this.arr.splice(i, 1);
    },
    dels() {
      this.list = this.list.filter((item) => {
        return item.check == false;
      });
    },
  },
  created() {},
  mounted() {},
  components: {},
  computed: {
    flag() {
      return {
        flag1: !this.list.every((i) => i.check == false),
        flag2: !this.list.every((item) => item.check),
      };
    },
    arr() {
      if (this.falg == "All") {
        return this.list;
      }
      if (this.falg == "Active") {
        return this.list.filter((item) => !item.check);
      }
      if (this.falg == "Completed") {
        return this.list.filter((item) => item.check);
      }
    },
    num() {
      let num = 0;
      this.arr.forEach((item) => {
        if (!item.check) {
          ++num;
        }
      });
      return num;
    },
  },
  watch: {},
};
</script>

<style lang='scss' scoped>
.active {
  background: #fe7345;
  color: #fff;
  border-radius: 8px;
  margin-top: 10px;
}

.xian {
  text-decoration: line-through;
}

.msg {
  margin-top: 20px;
  color: rgba(73, 74, 75, 0.45);
  font-size: 14px;
}

.msga {
  margin-top: 20px;
  font-size: 14px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.xz {
  padding: 4px 6px;
  background: #fe7345;
  border-radius: 4px;
  color: #fff;
}

.home {
  width: 100%;
  height: 100%;
  padding: 50px 0;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(90deg, #ffafbd, #ffc3a0);
  background-repeat: no-repeat;
}

.con {
  padding: 30px 40px 20px;
  text-align: center;
  width: 440px;
  max-width: 100%;
  margin: 0 auto;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  background: #f2f2f2;
}

.header {
  display: flex;
  align-items: center;
  justify-content: center;
}

img {
  width: 80px;
  height: 80px;
  max-width: 100%;
  -webkit-user-drag: none;
  margin-right: 10px;
}

.title {
  transform: rotate(3deg);
  font-size: 21px;
  padding: 0.25em 0.8em 0.15em;
  border-radius: 20% 5% 20% 5%/5% 20% 25% 20%;
  color: #fff;
  background: #fe7345;
  user-select: none;
  font-family: "Microsoft Yahe";
}

.form-field {
  margin-top: 25px;
}

.titleTwo {
  font-size: 22px;
  margin-bottom: 18px;
}

.form-wrapper {
  display: flex;
  justify-content: center;
}

.form-input input {
  width: 100%;
  border: 0;
  border-bottom: 3px dashed #fe7345;
  padding: 5px 0 3px;
  font-size: 18px;
  background: transparent;
  outline: none;
  color: rgba(73, 74, 75, 0.45);
}

.form-input {
  display: inline-block;
  flex-grow: 0.65;
  margin-right: 15px;
}

.submit-btn {
  position: relative;
  transform: rotate(4deg);
  border-radius: 6px;
  transition: transform 0.25s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.submit-btn span {
  position: relative;
  display: block;
  font-size: 16.5px;
  padding: 0.34em 0.84em;
  border: 2px solid #494a4b;
  border-radius: inherit;
  background-color: #fff;
}

.submit-btn:before {
  position: absolute;
  left: 0;
  top: 0;
  content: "";
  width: 100%;
  height: 100%;
  transform: scaleY(1.1);
  border: 1px solid #494a4b;
  border-radius: inherit;
  transform-origin: top;
  background-image: url(data:image/png;base64,R0lGODlhBAAEAIABAAAAAAAAACH/C1hNUCBEYXRhWE1QPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS4wLWMwNjEgNjQuMTQwOTQ5LCAyMDEwLzEyLzA3LTEwOjU3OjAxICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ1M1LjEgV2luZG93cyIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo5NUY1OENCRDdDMDYxMUUyOTEzMEE1MEM5QzM0NDVBMyIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo5NUY1OENCRTdDMDYxMUUyOTEzMEE1MEM5QzM0NDVBMyI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjk1RjU4Q0JCN0MwNjExRTI5MTMwQTUwQzlDMzQ0NUEzIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjk1RjU4Q0JDN0MwNjExRTI5MTMwQTUwQzlDMzQ0NUEzIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+Af/+/fz7+vn49/b19PPy8fDv7u3s6+rp6Ofm5eTj4uHg397d3Nva2djX1tXU09LR0M/OzczLysnIx8bFxMPCwcC/vr28u7q5uLe2tbSzsrGwr66trKuqqainpqWko6KhoJ+enZybmpmYl5aVlJOSkZCPjo2Mi4qJiIeGhYSDgoGAf359fHt6eXh3dnV0c3JxcG9ubWxramloZ2ZlZGNiYWBfXl1cW1pZWFdWVVRTUlFQT05NTEtKSUhHRkVEQ0JBQD8+PTw7Ojk4NzY1NDMyMTAvLi0sKyopKCcmJSQjIiEgHx4dHBsaGRgXFhUUExIREA8ODQwLCgkIBwYFBAMCAQAAIfkEAQAAAQAsAAAAAAQABAAAAgYEEpdoeQUAOw==);
  background-color: #fe7345;
  transition: transform 0.25s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.ul {
  li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    line-height: 60px;
    padding: 0 10px;

    input {
      margin-right: 5px;
    }
  }
}
</style>
