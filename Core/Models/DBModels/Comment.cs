using System;
using System.Collections.Generic;
using System.Text;

namespace Core.Models.DBModels
{
    public class Comment
    {
        public Comment() { }

        public string Author { get; set; }
        public string Body { get; set; }
        public int CommentId { get; set; }
        public DateTime CreateDate { get; set; }
    }
}
